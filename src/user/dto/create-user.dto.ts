import {IAddress} from "../interface/address.interface";

export class CreateUserDto {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly address: IAddress;
    readonly gender: string;
    readonly password: string;
}