import express from "express"
import { authorizeRoles, isAuthenticated } from "../midleware/auth"
import { createOrder, getAllOrdersAdmin, newPayment, sendStripePublishableKey } from "../controllers/order.controller"
import { getAllCoursesAdmin } from "../controllers/course.controller"
import { updateAccessToken } from "../controllers/user.controller"


const orderRouter = express.Router()


orderRouter.post("/create-order",updateAccessToken, isAuthenticated, createOrder)
orderRouter.get("/get-orders",updateAccessToken, isAuthenticated, authorizeRoles("admin"), getAllOrdersAdmin)
orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey)
orderRouter.post("/payment", isAuthenticated, newPayment)

export default orderRouter