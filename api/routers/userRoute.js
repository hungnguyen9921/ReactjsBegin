var express = require('express');
var router = express.Router();

var users = [
    {
        email: '123', password :'456'
    }
]

router.post('/', async(req, res) =>{
    let result = users.find(users=> users.email == req.body.email);
    if( result){
        if(result.password == req.body.password){
            res.status(200).send({
                message: "Successful login"
            })
        }else {
            res.status(200).send({
                message: "password incorrect"
            })
        }
    } else{
        res.status(200).send({
            message: "user incorrect"
        })
    }
})

module.exports = router;