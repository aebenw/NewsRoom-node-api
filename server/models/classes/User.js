import { User } from '../'
import jwt from 'jsonwebtoken'

class UserClass {


  generateAuthToken(){
    const access = 'auth';
    const token = jwt.sign({_id: this._id.toHexString(), access}, 'abc123').toString();

    this.tokens.push({access, token});

    return this.save().then(() => {
      return token;
    });
  }

  static async findByToken(token){
    let decoded;

    try {
      decoded = jwt.verify(token, 'abc123');
    } catch (e) {

      return e;
    }

    let user = await User.findOne({
      '_id': decoded._id,
      'tokens.token': token,
      'tokens.access': 'auth'
    });
    return user
  }
}

export default UserClass
