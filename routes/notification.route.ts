import express from "express"
import { authorizeRoles, isAuthenticated } from "../midleware/auth"
import { getAllNotifications, updateNotification } from "../controllers/notification.controller"
import { updateAccessToken } from "../controllers/user.controller"
const notificationRoute = express.Router()



notificationRoute.get("/get-all-notifications",updateAccessToken, isAuthenticated, authorizeRoles("admin"), getAllNotifications)
notificationRoute.put("/update-notification/:id",updateAccessToken, isAuthenticated, authorizeRoles("admin"), updateNotification)
export default notificationRoute