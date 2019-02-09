// Attempt at super class but loadclass but mongoose loadclass
// isn't working properly
// doesn't recoginze "this" to refer to a document
// or the model in static methods


class ModelClass {
  constructor(model){
    this.model = model
  }

  static async findOrCreateByID(instance){
  let answer = await this.findOne({id: instance})
    if(!answer){
      answer = await this.create({identifier: instance})
    }
    return answer
  }

  static async findOrCreate(identifier, instance){
  let answer =  await this.findOne({[identifier]: instance})
    if(!answer){
      answer =  await this.create({identifier: instance})
    }
    return answer
  }

}

export default ModelClass
