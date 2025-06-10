import express from 'express'
import User from '../models/users.js'


const router = express.Router()

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

// Example: POST /api/users
router.post('/', async (req, res) => {
  try {
    const { username, email } = req.body
    const newUser = new User({ username, email })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})
// get one data
router.get('/:id',async(req,res)=>{
     try { 

    // const user = await User.find({
    //   _id:req.params.id,
    // })

    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ✏️ Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// 🗑️ Delete
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
      return res.status(404).json({message:"User not found"})
      
    }
    res.json({ message: 'User deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
