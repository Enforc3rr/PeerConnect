const userDatabase = require("../Model/userModel");
const shortUserDatabase = require("../Model/shortUserModel");

exports.userSignup =async (req,res)=>{

    const savedUser = await userDatabase.create(req.body);

    let skillCount = 0;
    await asyncForEach(req.body.skillSet,async (data)=>{
       const shortSavedUser = await shortUserDatabase.create({
            name : savedUser.name ,
            country : savedUser.country ,
            knownLanguage: savedUser.knownLanguage ,
            ratingForThisSkill : data.ratingAssociatedWithSkill ,
            isMentor : data.isMentor ,
            mainUserReference : savedUser._id,
            skill : data.skillName
        });
       savedUser.skillSet[skillCount].referenceOfIdAssociatedWithThisSkill = shortSavedUser._id;
       skillCount++;
    });
    res.status(201).json({
        success : true ,
        message : "User Profile Created"
    });

    await userDatabase.findByIdAndUpdate(savedUser._id,savedUser);
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}