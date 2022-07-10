const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

let db;

async function go() {
  db = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "example",
    database: "test",
  });
  app.listen(3000);
}

go();

app.get("/", async (req, res) => {
  const [kates] = await db.execute("SELECT * FROM kates");
  console.log(kates);
  res.send(
    `<ul>${kates.map((gyvunai) => `<li>${gyvunai.name}</li>`).join("")}</ul>`
  );
});
