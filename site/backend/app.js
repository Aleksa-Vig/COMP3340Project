const express = require("express");
const app = express();

app.post("/post", (req, res) => {
    console.log("Connection made. Redirecting to React");
    res.redirect("/");
});

app.post("/api", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ resp: "test" }));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
