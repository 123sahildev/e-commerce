const jwt = require("jsonwebtoken");
const secret = require("dotenv").config()

const middlewere = async(req, res, next) => {
    let auth = req.headers.authorization;
    
    if (!auth) {
        return res.status(401).json({message : 'nothing inside'});
    }

    let token = auth.split(" ")[1];
    
    try {
        let key = process.env.KEY;
        let decodedId = jwt.verify(token, key);

        req.body.userId = decodedId.userId;
        console.log('payload', decodedId);
        
        next();


    } catch (error) {
        console.log(error);
        
    }

}


module.exports = middlewere;