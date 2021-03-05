const dbconfigs = require("./db.configs");
const serverConfigs = require ("./server.configs");
const jwtConfig = require("./jwt.config")

exports.database = dbconfigs;
exports.server = serverConfigs;
exports.jwt = jwtConfig;
