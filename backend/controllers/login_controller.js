const Login = require("../models/login_model");


const LoginAction = async (req, res) => {
    let { email, password } = req.body;

    let checkemail = await Login.findOne({"email" : email});

    if (!checkemail) {
        return res.json({message : "Email does'nt exist"});
    }

    return res.json({message : checkemail})
    
}

module.exports = LoginAction;