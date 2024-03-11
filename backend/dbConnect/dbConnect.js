import mongoose from "mongoose"

export const connectDb = (url) => {
    try {
        mongoose.connect(url).then(() => console.log("Database Connected"), (err) => console.log(err))
    } catch (error) {
        console.log(error);
    }
}