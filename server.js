const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));

const { sequelize, User } = require("./models");

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
});

app.post("/users", async (req, res) => {
  const { data } = req.body;
  try {
    const users = await User.create(data);
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});


app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.destroy({ where: { id } });
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
})

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  try {
    const users = await User.update(data, { where: { id } });
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
