import { Router } from "express";
import {
  getBuyers,
  createBuyers,
  createBuyer,
  getBuyer,
  updateBuyer,
  updateBuyers,
  deleteBuyer,
  deleteBuyers,
} from "../controller/buyers.controller";

const router = Router();

router.get("/", getBuyers);
router.get("/create-many", createBuyers);
router.post("/create", createBuyer);
router.get("/:id", getBuyer);
router.patch("/:id", updateBuyer);
router.patch("/", updateBuyers);
router.delete("/:id", deleteBuyer);
router.delete("/", deleteBuyers);

export default router;
