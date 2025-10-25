import express from "express";
import Course from "../models/Course.js";



const router = express.Router();

router.get("/", async (req,res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({error: "Server error"});
  }
});

router.post("/", async (req, res) => {
  try {
    const {title, description, category, image} = req.body;
    const newCoures = new Course({title, description, category, image});
    await newCoures.save();
  }catch (error) {
    res.status(500).json({ error: "Failed to create course"});
  }
});

export default router;