import express from "express";
import { activateUser, deleteUser, getAllUsers, getUserInfo, loginUser, logoutUser, registrationUser, 
    socialAuth, updateAccessToken, 
    updatePassword, updateProfilePicture, 
    updateUserInfo, updateUserRole } from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../midleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", updateAccessToken, isAuthenticated, logoutUser);
userRouter.get("/me", updateAccessToken, isAuthenticated, getUserInfo);
userRouter.get("/refresh", updateAccessToken)
userRouter.post("/social-auth", socialAuth)
userRouter.put("/update-user-info", updateAccessToken, isAuthenticated, updateUserInfo)
userRouter.put("/update-user-password", updateAccessToken, isAuthenticated, updatePassword)
userRouter.put("/update-user-avatar", updateAccessToken, isAuthenticated, updateProfilePicture)
userRouter.get("/get-all-users", updateAccessToken, isAuthenticated, authorizeRoles("admin"), getAllUsers)
userRouter.put("/update-user-role", updateAccessToken, isAuthenticated, authorizeRoles("admin"), updateUserRole)
userRouter.delete("/delete-user/:id", updateAccessToken, isAuthenticated, authorizeRoles("admin"), deleteUser)

export default userRouter;
