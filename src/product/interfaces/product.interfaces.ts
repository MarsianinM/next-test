import * as mongoose from 'mongoose';

export interface IProduct extends Document {
    readonly title: string;
    readonly slug: string;
    readonly prise: number;
    readonly category: mongoose.Types.ObjectId;
    readonly text: string;
}