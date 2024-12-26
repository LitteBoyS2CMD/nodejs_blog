const express = require('express')
const app = express()
const port = 3000

// Định nghĩa đường truyền trên url '/name'
app.get('/home', (req, res) => {
    res.send('Hello World! I am Groot')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})