const shortUserDatabase = require("../Model/shortUserModel");


exports.getShortUserBySkill = async (req,res)=>{
    const peers = await shortUserDatabase.find({skill : req.params.skill});
    if(peers)
        return res.status(200).json(peers);
    else
        return res.status(200).json({message : "Peers With Particular Skill Were Not Found"});
}
