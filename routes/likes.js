import express from "express";
import LikeController from "../controller/likes.js";
import AuthClass from "../middleware/auth.js";
const likeController = new LikeController();
const router = express.Router();
const authClass = new AuthClass();

router.get(
  "/posts/like",
  authClass.isAuth,
  likeController.getAllLikeController
);

router.put(
  "/posts/:postId/like",
  authClass.isAuth,
  likeController.updateLikeController
);

export default router;
