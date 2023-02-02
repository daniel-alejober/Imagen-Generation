import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import PostSchema from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINATY_CLOUD_NAME,
  api_key: process.env.CLOUDINATY_API_KEY,
  api_secret: process.env.CLOUDINATY_API_SECRET,
});

//get all post
router.route("/").get(async (req, res) => {
  try {
    //*Ya no existe findAll para traer todos los valores le debemos de pasar un objeto vacio
    const allPost = await PostSchema.find({});
    res.status(200).json({ success: true, data: allPost });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
});

//save a img
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo, {
      folder: "openai_img_generation",
    });

    const newPost = PostSchema.create({ name, prompt, photo: photoUrl.url });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
});

export default router;
