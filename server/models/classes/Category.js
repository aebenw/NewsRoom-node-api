import { Category } from '../'

class CategoryClass  {

  static async findOrCreateByName(name){
    let cat = await Category.findOne({name})
      if(!cat){
        cat = await Category.create({name})
      }
      return cat
    }
}

export default CategoryClass;




// ************ For some reason, load class doesn't register
// ************ 'this' in static methods as refering the model
// ************ Been debugging for too long, I think it might
// ************ Have to do with my babel set up, but uncertain
// ************ The only way I can get it to reference the model
// ************ Is if I import at the top.... not ideal


// class CategoryClass {
//
//   // constructor(){
//   //
//   //   super(Category)
//   //   console.log(this.base.model, "attempt")
//   // }
//
//   static async findOrCreateByName({category}){
//     // let cat = await super.findOrCreate("name", category)
//     console.log(this, "this in class")
//     let cat = await this.find({"name": category})
//     return cat
//     }
// }
//
// export default CategoryClass;
