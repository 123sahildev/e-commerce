const Register = require("../models/register_model");


const RegisterAction = async (req, res) => {
    let { username, email, password } = req.body;

    let checkuser = await Register.findOne({"email" : email});
    if (checkuser) {
        return res.json({message : "Email already exits"});
    }

    let checkresult = await Register.create(req.body)
    console.log(checkresult);
    
    return res.json({message : "Register sucessfull!"});

}

module.exports = RegisterAction;