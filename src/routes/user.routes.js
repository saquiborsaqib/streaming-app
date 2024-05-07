import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router(); // Changed from router to userRouter

userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "Cover Image",
            maxCount: 1
        }
    ]),
    registerUser);
export default userRouter;
