const Login = require("../models/login_model");
const jwt = require('jsonwebtoken');
const secret = require('dotenv');


const LoginAction = async (req, res) => {
    let { email, password } = req.body;

    let checkemail = await Login.findOne({"email" : email});

    if (!checkemail) {
        return res.json({message : "Email does'nt exist"});
    }
    let key = process.env.KEY;
    let token = jwt.sign({userId : checkemail._id}, key )
    return res.json({message : token})
    
}

module.exports = LoginAction;