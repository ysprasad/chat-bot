import { Router } from "express";
import userRouter from "./user-routes.js";
import chatroutes from "./chats-route.js";
const appRouter=Router();
appRouter.use("/user",userRouter);
appRouter.use("/chats",chatroutes);

export default appRouter;