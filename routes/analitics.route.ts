import express from "express"
import { authorizeRoles, isAuthenticated } from "../midleware/auth"
import { getCoursesAnalytics, getOrdersAnalytics, getUserAnalytics } from "../controllers/analitics.controller"
import { updateAccessToken } from "../controllers/user.controller"
const analyticsRouter = express.Router()

analyticsRouter.get("/get-users-analytics",updateAccessToken, isAuthenticated, authorizeRoles("admin"), getUserAnalytics)
analyticsRouter.get("/get-orders-analytics",updateAccessToken, isAuthenticated, authorizeRoles("admin"), getOrdersAnalytics)
analyticsRouter.get("/get-courses-analytics",updateAccessToken, isAuthenticated, authorizeRoles("admin"), getCoursesAnalytics)


export default analyticsRouter