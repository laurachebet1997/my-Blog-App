import express from "express"
import { getAllUser, signUp, login } from "../controllers/UserController.js"


const router = express.Router()

router.get('/', getAllUser)
router.post('/signup', signUp)
router.post('/login', login)
//router.get('/portfolio',portfolio)


export default router;