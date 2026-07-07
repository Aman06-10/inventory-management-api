import express from "express"
import items from "./routes/itemroutes.js"
import fs from "fs/promises"
const app = express()
const Port = 3000

app.use((req, res, next) => {
    fs.appendFile('logs.txt', `${req.method} ${req.url} \n`)
    next()
})
app.use(express.json())

app.use('/items', items)

app.get('/', (req, res) => {
    res.status(200).json({ "message": "Inventory API Running" })
})

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`)
})

