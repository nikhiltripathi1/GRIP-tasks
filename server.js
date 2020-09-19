const mongoose = require("mongoose");
const express = require("express");

const app = express();

//middleware
app.use(express.json());

//DB Config
const db =
  "mongodb+srv://nik645:8851514606@cluster0-fc2be.mongodb.net/users?retryWrites=true&w=majority";

//connecting MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => console.log("Database not connected", err));

//Routes
app.use("/users", require("./routes/api/users"));
app.use("/transfer", require("./routes/api/transfers"));
app.use("/transaction", require("./routes/api/transactions"));

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running at port ${port}`));
