import express from "express"
import { create, deletedata, getAll, getone, update } from "../controllers/uerControlller.js"
const route = express.Router()


route.post('/create', create)
route.get('/getall', getAll)
route.get('/getone/:id',getone)
route.put('/update/:id',update)
route.delete('/delete/:id',deletedata)

export default route