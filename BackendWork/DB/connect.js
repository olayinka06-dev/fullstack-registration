const { default: mongoose } = require("mongoose");

require("dotenv").config();
const pass = process.env.pass;

const MONGO_URL = `mongodb+srv://olayinkadev:${pass}@cluster0.s4wqj2o.mongodb.net/registeration?retryWrites=true&w=majority`;


const connectDB = async () => {
    await mongoose.connect(MONGO_URL);
}

module.exports = connectDB;