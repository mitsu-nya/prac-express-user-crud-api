const express = require("express");
const app = express();

const userRoutes = require("./routes/users");

const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

//ユーザ
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log("Start http://localhost:3000");
});