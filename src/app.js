const express = require("express");
const handlenbars = require("express-handlebars");

const app = express();
const server = app.listen(8080, () => {
  console.log("Listening to handlebars on port 8080");
});

app.engine("handlebars", handlenbars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

let llamadaABaseDeDatos = () => {
  return [
    {
      firstName: "John",
      lastName: "Doe",
      age: 50,
    },
    {
      firstName: "Anna",
      lastName: "Smith",
      age: 43,
    },
    {
      firstName: "Peter",
      lastName: "Jones",
      age: 27,
    },
  ];
};

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users", (req, res) => {
  let users = llamadaABaseDeDatos();

  res.render("users", { users: users });
});
