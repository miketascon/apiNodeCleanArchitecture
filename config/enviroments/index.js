const dotenv = require("dotenv");
dotenv.config();

const PRODUCTION = require("./production");
const DEVELOPMENT = require("./development");
const QA = require("./qa");

const { NODE_ENV } = process.env;

let currentEnvironment = DEVELOPMENT;

if (NODE_ENV === "production") {
  currentEnvironment = PRODUCTION;
} else if (NODE_ENV === "qa") {
  currentEnvironment = QA;
}

module.exports = currentEnvironment;

