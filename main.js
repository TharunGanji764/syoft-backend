const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authenticateRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://tharun:tharun@tharun.qtg8wns.mongodb.net/syoft?retryWrites=true&w=majority&appName=Tharun"
  )
  .then(() => console.log("DB connected....."))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.use("/syoft/auth", authRoutes);
app.use("/syoft/product", productRoutes);
app.use("/syoft/user", userRoutes);

app.listen(5000, () => {
  console.log("Server started.....");
});
