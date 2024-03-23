import mongoose from 'mongoose';

//The users collection should hold documents that (at the minimum) include the 
//following properties: id, first_name, last_name, and birthday.

const UsersSchema= new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    unique: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String
    required: true
  },
  birthday: {
    type: Date,
    required: true
  }
})

const User = mongoose.model('users', usersSchema);

export default User ;