class CategoryClass  {

  static async findOrCreateByName(name){
    let cat = await this.findOne({name})
      if(!cat){
        cat = await this.create({name})
      }
      return cat
    }
}

export default CategoryClass;
