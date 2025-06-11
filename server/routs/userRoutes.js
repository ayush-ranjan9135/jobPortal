import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js' // also make sure to add `.js` here if using ES Modules

const router = express.Router()

// Get user data
router.get('/user', getUserData)

// Apply for a job
router.post('/apply', applyForJob)

// Get applied job data
router.get('/applications', getUserJobApplications)

// Update user profile (resume)
router.post('/update-resume', upload.single('resume'), updateUserResume)

export default router
