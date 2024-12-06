import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect("mongodb+srv://aradhyatrehan20:bSdkxII2ZZHnd8F9@cluster0.eny6c.mongodb.net/db")
    .then(() => {
        console.log("Connected to database successfully!");
    })
    .catch(err => {
        console.log(`Some error occurred while connecting to database! ${err}`);
    });
};

export default dbConnection;
