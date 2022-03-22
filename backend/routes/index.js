import express from "express";
import { getAllSiswa, createSiswa, getSiswaById, updateSiswa, deleteSiswa } from "../controller/Siswa.js";

const router = express.Router();

router.get("/", getAllSiswa);
router.get("/:id", getSiswaById);
router.post("/", createSiswa);
router.patch("/:id", updateSiswa);
router.delete("/:id", deleteSiswa);

export default router;
