const express = require('express')
const router = express.Router(); 

const {getAllQuizes,getAllQuizesTesting} = require("../controlers/quizesController")

router.route("/").get(getAllQuizes);
router.route("/testing").get(getAllQuizesTesting);

module.exports =  router;
