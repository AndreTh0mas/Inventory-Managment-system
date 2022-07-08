const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('./db/config'); 
const Users = require("./db/Users");
app.use(express.json());
app.use(cors());
const Product = require("./db/products");


app.post("/register", async (req, resp) => {
    const user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
    // resp.send("api in progress ...")
});


app.post("/login", async (req, resp) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let user = await Users.findOne(req.body).select("-password");
        if (user) {
            resp.send(user);
        }
        else {
            resp.send({ result: "No user Found" })
        }
    }
    else{
        resp.send({result: "No user Found"})
    }

})

app.post("/add-product",async (req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
})

app.get("/products", async (req,resp) =>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result:"No product found"})
    }
});

app.delete("/product/:id", async (req,resp) =>{
    // const result = await Product.deleteOne({_id: req.params.id});
    // resp.send(result);
    // resp.send(req.params.id)
    const result = await Product.deleteOne({_id:req.params.id});
    resp.send(result);

})

app.get("/product/:id",async (req,resp)=>{
    let result = await Product.findOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }else{
        resp.send({result:"No record Found"});
    }
})

app.put("/product/:id",async (req,resp)=>{
    let result = await Product.updateOne(
        {_id: req.params.id},
        {
            $set: req.body
        }
    )
    resp.send(result)
});

app.get("/search/:key",async (req,resp) =>{
    let result = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
        ]
    });
    resp.send(result);
})

// const connectDB = async ()=>{
//     mongoose.connect('mongodc://localhost:27017/e-comm');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product',productSchema);
//     const data = await product.find();
//     console.warn(data);
// }
// connectDB();
// app.get("/",(req,resp)=>{
//     resp.send("App is working...")
// });

app.listen(5000)
