import { request } from "express";
import Siswa from "../models/siswaModel.js";

// MENAMPILKAN SEMUA DATA
export const getAllSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.findAll();
        res.json(siswa);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// MENAMPILKAN DALAH SATU DATA
export const getSiswaById = async (req, res) => {
    try {
        const siswa = await Siswa.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(siswa[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// MEMBUAT DATA
export const createSiswa = async (req, res) => {
    try {
        await Siswa.create(req.body);
        res.json({
            message: "Product created",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// MENGUBAH DATA YANG ADA
export const updateSiswa = async (req, res) => {
    try {
        await Siswa.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: "Product updated",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// MENGHAPUS DATA YANG ADA
export const deleteSiswa = async (req, res) => {
    try {
        await Siswa.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: "Product deleted",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
