import * as mongoose from 'mongoose'
import {genderEnum} from "../enums/gender.enum";

export  const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type:String, required: true },
    lastName: { type:String, required: true },
    address: {
      country: { type: String, default: null},
      city: { type: String, default: null},
      lineAddress: { type: String, default: null},
    },
    gender: { type: String, required: true, enum: Object.values(genderEnum) },
    password: {type: String, required: true},
})

UserSchema.index({email: 1},{unique: true})