import mongoose, {Schema} from 'mongoose';
import { CategoryClass } from '../classes'

const {Types : {ObjectId}} = Schema

const CategorySchema = new Schema({
  name: {
    type: String
  },
  sources: [{type: ObjectId, ref: 'Sources'}],
  users: [{type: ObjectId, ref: 'Users'}]

});

CategorySchema.loadClass(CategoryClass)
const Category = mongoose.model('Category', CategorySchema);

export default Category;
