require("dotenv").config()
const connectDB = require("./db/database");
const quizes = require("./model/quizes")


const quizesJason = require("./quizes.json")

const Start = async() => {
try {
    await connectDB(process.env.mongoose_URL)
    await quizes.deleteMany(); // delete all data in the collection before adding new ones
    await quizes.create(quizesJason);
    console.log("secccccccc")
} catch (error) {
    console.log(error)
    
}

}
Start();