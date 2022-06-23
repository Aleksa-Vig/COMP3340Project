const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors())

app.post("/post", (req, res) => {
    console.log("Connection made. Redirecting to React");
    res.redirect("/");
});

app.post("/api", (req, res) => {
    res.json({resp: "Test"});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
