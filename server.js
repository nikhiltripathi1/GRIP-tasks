const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//DB Config
const db = require("./config/keys").mongoURI;

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
app.use("/transactions", require("./routes/api/transactions"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running at port ${port}`));
