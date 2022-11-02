import dotenv from "dotenv";

dotenv.config();

export let dbOptions = {

  type: "mysql",
  
  host:'localhost',

  port:  3306,
  user:  "root",

  password:  "msk9959",

  database:"slambook",

  charset: "utf8mb4",

  driver: "mysql",
  
  
  insecureAuth: true,

  connectTimeout: 30000,

  acquireTimeout: 30000,

};
