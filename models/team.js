import { connection } from "../db";
import { Sequelize } from "sequelize";

export const teams = connection.define(
  "teams",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
  },
  { timestamps: true, tableName: "teams" }
);
