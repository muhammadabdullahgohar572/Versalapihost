
const mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
    },
    password: {
      type: Number,
      require: true,
    },
  });

  const user=mongoose.model("user",userSchema)

  module.exports=user