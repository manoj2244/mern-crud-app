import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB(); // <-- Call DB connect

const app = express()

app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{

  console.log(53+88)
  next()
    
})

// API routes
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected")
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   })
//   .catch(err => console.error("MongoDB connection failed:", err))

// Sample route
// app.get('/api/hello', (req, res) => {
//   res.json({ message: "Hello from backend" })
// })
app.listen(PORT)