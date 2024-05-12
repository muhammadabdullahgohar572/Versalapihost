
const mongoose=require('mongoose')

const bdconented= async ()=>{

    try {
        await mongoose.connect(
    "mongodb+srv://muhammadabdullahgohar572:ilove1382005@cluster0.6rlsmpt.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("DB Connected");
    } catch (error) {
        console.log("error ",error);
    }
}
module.exports= bdconented