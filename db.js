const seQuelize = require('sequelize')

const db = new seQuelize('shopdb','root','mypass', {
    host :'localhost',
    dialect : 'mysql',
    pool: {
        min:0,
        max:5
    }
})

const user  = db.define('users',{
    id:{
        type: seQuelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type : seQuelize.STRING,
        allowNull:false
    }
})

const product = db.define('products',{
    id:{
        type: seQuelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type : seQuelize.STRING,
        allowNull:false
    },
    manufacturer:seQuelize.STRING,
    price:{
        type : seQuelize.FLOAT,
        allowNull : false,
        defaultValue : 0.0
    }
})

db.sync()
.then(() =>console.log("database has been synched"))
.catch((err)=> console.log("error creating database"))

exports = module.exports = {
    user,product
}