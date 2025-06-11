import express from 'express'
import {
  changeJobApplicantsStatus,
  changeVisiblity,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJob,
  loginCompany,
  postJob,
  registerCompany
} from '../controllers/companyController.js'

import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register a company
router.post('/register', upload.single('image'), registerCompany)

// Company login
router.post('/login', loginCompany)

// Get company data
router.get('/company', protectCompany, getCompanyData)

// Post a job
router.post('/post-job', protectCompany, postJob) 

// Get applicants data of company
router.get('/applicants', protectCompany, getCompanyJobApplicants)

// Get company job list
router.get('/list-jobs', protectCompany, getCompanyPostedJob)

// Change applicants status
router.post('/change-status', protectCompany, changeJobApplicantsStatus)

// Change job visibility
router.post('/change-visiblity', protectCompany, changeVisiblity)

export default router
