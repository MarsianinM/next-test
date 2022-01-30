import {Document} from 'mongoose'
import {IAddress} from "./address.interface";

export interface IUser extends Document{
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly address: IAddress;
    readonly gender: string;
    readonly password: string;
}