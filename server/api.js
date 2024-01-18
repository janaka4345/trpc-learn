import express from "express";
import cors from 'cors'

const app = express()
app.use(cors({ origin: 'http://localhost:5000' }))




app.listen(5000, () => {
    console.log('listening on port 5000');
})