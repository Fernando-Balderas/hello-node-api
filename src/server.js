const express = require("express")

const PORT = process.env.PORT || 5000

const app = express();

app.get('/', (req, res, next) => {
    res.json({ msg: "hello from server" })
})

app.listen(PORT, () => {
    console.log("App is running at http://localhost:%d", PORT);
})