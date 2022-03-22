import { Sequelize } from "sequelize";

// Database name, name host, password
const db = new Sequelize("siswasma", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;
