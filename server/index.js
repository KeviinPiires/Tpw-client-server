const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "marydb",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { user } = req.body;
  const { password } = req.body;

  let SQL = "INSERT INTO marydb.user (user, password) VALUES (?,?);";

  db.query(SQL, [user, password], (err, result) => {
    console.log(err);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM marydb.user";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3001, () => {
  console.log("Rodando servidor");
});
