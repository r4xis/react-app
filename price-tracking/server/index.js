const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:5001",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));
app.use("/admin", require("./routes/admin"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
