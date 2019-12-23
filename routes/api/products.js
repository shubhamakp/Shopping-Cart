const product = require('../../db').product
const route = require('express').Router()

route.get('/',(req,res)=>{
    product.findAll()
        .then((products) =>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"could not retrieve products"
            })
        })
})

route.post('/',(req,res)=>{

    if(isNaN(parseFloat(req.body.price))){
        return res.status(403).send({
            error:"price is not valid number"
        })
    }
    product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    }).then((products)=>{
        res.status(201).send(products)
    }).catch((err) =>{
        res.status(501).send({
            error:"error adding products"
        })
    })
})
exports = module.exports = route