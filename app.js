const { response } = require("express");
const express = require("express");
const app = express();
const {screenshot} = require('./screenshot');



app.get("/",(req,res)=>{
  console.log("creating a request")
  screenshot('https://google.com')
  .then((data) => {res.status(200).json(data)})
  
  .catch(error => res.status(400).send(error));
})

app.listen(process.env.PORT || 8080,()=>{
  console.log ("Server running");
});
