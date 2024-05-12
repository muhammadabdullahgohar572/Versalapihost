const express=require('express')
const bdconented = require('./conf/User')

const User=require('./conf/model/Data')
const app=express()
bdconented()

app.use(express.json())
const port=4000
app.get('/',(req,res)=>{

    res.send('hello ')

})

app.post("/createuser", async (req, res) => {
    const { name, password, age, email } = req.body;
  
    const newUser = new User({
      name,
      password,
      age,
      email,
    });
  
    await newUser.save();
    console.log(newUser);
  
    res.json(newUser);
  });

app.listen(port,()=>{
    console.log("ok");
})