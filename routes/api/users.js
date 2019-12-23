const user = require('../../db').user
const route  = require('express').Router()

route.get('/',(req,res ) =>{

    user.findAll()
        .then((users) =>{
            res.status(200).send(users)
        })
        .catch((err) =>{
            res.status(500).send({
                error:"could not retreive users"
            })
        })
} )

route.post('/',(req,res) =>{

    console.log(req.body.name)
    user.create({
        name: req.body.name
    }).then((user) =>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error:"could not create"
        })
    })
})

exports =module.exports = route