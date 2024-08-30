import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicats, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();
router.route("/apply/:id").get(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated,getApplicats);
router.route("/status/:id/update").post(isAuthenticated,updateStatus);


export default router;