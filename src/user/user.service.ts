import { Injectable, Post } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import {IUser} from "./interface/user.interface";
import {CreateUserDto} from "./dto/create-user.dto";


@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel: Model<IUser>) {}

    @Post()
    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const hash = await bcrypt.hash(createUserDto.password, salt);

        const createUser = new this.userModel(_.assignIn(createUserDto,{password: hash}));

        return await createUser.save();
    }

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find().exec();
    }

    async findId(id: string): Promise<IUser> {
        return await this.userModel.findById(id).exec();
    }
    async findOne(userEmail: string): Promise<IUser> {
        return await this.userModel.findOne({email:userEmail}).exec();
    }
}
