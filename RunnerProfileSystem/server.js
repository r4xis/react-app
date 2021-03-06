const express = require("express");
const cors = require("cors");
const path = require("path");

const pace = require("./routes/pace");
const users = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/pace", pace);
app.use("/users", users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
