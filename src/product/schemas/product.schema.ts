import * as mongoose from 'mongoose';



export const ProductSchema = new mongoose.Schema ({
   title: { type: String, required: true},
   slug: { type: String, required: true},
   prise: { type: mongoose.Schema.Types.Number, required: true},
   category: { type: mongoose.Types.ObjectId, default: null, ref: 'Categories'},
   text: {type: String, default: null},
});

ProductSchema.index({ slug: 1}, { unique: true });