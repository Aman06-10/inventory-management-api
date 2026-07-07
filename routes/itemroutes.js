import express from "express"
import { addItem, deleteItem, getAllItems, getItemById,  updateItem, updatePartialData } from "../controllers/itemcontroller.js"
const router = express.Router()


router.get('/', getAllItems)

router.get('/:id', getItemById)

router.post('/', addItem)

router.put('/:id', updateItem)

router.patch("/:id", updatePartialData)

router.delete("/:id", deleteItem)

export default router