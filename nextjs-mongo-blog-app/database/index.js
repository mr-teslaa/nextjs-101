import mongoose, { connect } from "mongoose";


const connetToDB = async () => {
    const connectionUrl = "mongodb+srv://tesla:aVeQs7ghS23gj4Rg@nextjs-mongo-blog-app.2vzl2.mongodb.net/"
    mongoose
        .connect(connectionUrl)
        .then(() => console.log("Database connection is successful"))
        .catch(e => log(e));
}

export default connetToDB;