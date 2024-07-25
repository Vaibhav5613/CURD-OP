import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../Controller/userCtrl.js";

const router = express.Router();

router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.patch("/updatedUser/:userId", updateUser);
router.delete("/deletedUser/:userId", deleteUser);

router.get("/search", async (req, res) => {
  console.log(req.params.key);
  let data = await Patient.find({
    $or: [
      {
        name: { $regex: req.params.key, $options: "i" },
        // "email": { "$regex": req.params.key, "$options": "i" }
      },
    ],
  });
  res.send(data);
});

export default router;
