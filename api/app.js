const express = require('express');
const port = 3000 || process.env.PORT;


const app = express();


app.listen(port, () => {
    console.log("Server running on: " + port);
})

app.get("/", (req, res) => {
    res.json({ message: "Hello world!" })
});