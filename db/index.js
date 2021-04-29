import { Sequelize } from "sequelize";
import mysql from "mysql2";
export const connection = new Sequelize("sequelize", null, null, {
  port: 3306,
  dialect: "mysql",
  dialectModule: mysql,
  replication: {
    read: [
      {
        host: process.env.DB_HOST_MASTER,
        username: process.env.DB_USERNAME_MASTER,
        password: process.env.DB_PASSWORD_MASTER,
        database: process.env.DB_DATABASE_MASTER,
      },
    ],
    write: {
      host: process.env.DB_HOST_MASTER,
      username: process.env.DB_USERNAME_MASTER,
      password: process.env.DB_PASSWORD_MASTER,
      database: process.env.DB_DATABASE_MASTER,
    },
  },
  pool: {
    // If you want to override the options used for the read pool you can do so here
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
