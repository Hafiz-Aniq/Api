const quizes = require("../model/quizes")
const getAllQuizes = async(req , res) => {
    const quizesData = await quizes.find(req.query);
    res.status(200).json({quizesData});
};


const getAllQuizesTesting =async (req, res) => {
    console.log('api running')
    res.status(200).json({msg: "i'm getting my all quizes"})
};

module.exports={getAllQuizes , getAllQuizesTesting} ; 