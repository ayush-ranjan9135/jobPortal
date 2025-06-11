import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database connected")
  );

  await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
  //   , {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
};

export default connectDB;