const express = require("express");
const app = express();
const path = require("path");
const axios = require('axios');
const PORT = 8081 || process.env.PORT;

app.use(express.static("."))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/product.html")
});


app.get("/getMany",(req,res)=>{
    axios.get("https://next.json-generator.com/api/json/get/EkzBIUWNL")
    .then(reponse =>{
           res.send(reponse.data);
           console.log(reponse.data)
        }).catch(error =>{
            console.log(error);
        }); 
})

app.get("/getSingle/:id",(req,res)=>{
    // test http://localhost:8081/getSingle/5c58693b2f3b8ac746a18f85
    console.log(req.params);
    axios.get("https://next.json-generator.com/api/json/get/EkzBIUWNL")
    .then(reponse =>{
           reponse.data.filter(item => {
               if(item._id === req.params.id){
                   console.log(item);
                   res.send(item);
               }
            })
           }).catch(error =>{
            console.log(error);
        }); 
})
app.listen(8081,()=>{
    console.log(`http://localhost:${PORT}`);
})