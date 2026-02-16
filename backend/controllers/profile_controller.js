const Profile = require("../models/profile_model");

const ProfileAction = async (req, res) => {
    try {

        let { userId } = req.body;
        let checkUser = await Profile.findOne({_id : userId}).lean();
        
        if (!checkUser) {
            return res.json({message : "User does'nt found"});
        }
        
        return res.json({ message : checkUser.username})
        
    } catch (error) {
        console.log(error);
        
    }

    // console.log('profile_constroller is running!');
    
}

module.exports = ProfileAction;