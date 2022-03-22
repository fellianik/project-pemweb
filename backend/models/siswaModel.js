import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Siswa = db.define(
    // nama table
    "jumlah_siswa",
    {
        Provinsi: {
            type: DataTypes.STRING,
        },
        SumKelasX: {
            type: DataTypes.INTEGER,
        },
        KelasXPersen: {
            type: DataTypes.FLOAT,
        },
        SumKelasXI: {
            type: DataTypes.INTEGER,
        },
        KelasXIPersen: {
            type: DataTypes.FLOAT,
        },
        SumKelasXII: {
            type: DataTypes.INTEGER,
        },
        KelasXIIPersen: {
            type: DataTypes.FLOAT,
        },
    },
    {
        freezeTableName: true,
    }
);

export default Siswa;
