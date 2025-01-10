const express = require("express");
const cors=require("cors");
const app = express();
const options = {
    origin:(origin,callback) => {
    callback(null,true)
  }
}
app.use(cors(options));
app.use(express.json());

const data = ['hello',123,{"key":"value"}];

app.get('/',(req,res) => {
    res.send(data)
})

let studentData = [
    {
    name:"rithika",
    age:20,
    rollnumber:222207
}];
app.post('/',(req,res)=> {
    studentData.push(req.body);
    console.log(req,body);
    res.send("Done")
    })
app.listen(3333,()=>{
    console.log("started")
})