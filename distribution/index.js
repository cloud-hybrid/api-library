"use strict";
exports.__esModule = true;
exports.ORM = exports.API = exports.Axios = exports.Router = exports.Octokit = exports.Database = exports.Compression = exports.Application = exports.Library = void 0;
var tslib_1 = require("tslib");
var Module = (0, tslib_1.__importStar)(require("./module.js"));
exports.Library = {
    Compression: Module.Compression,
    Application: Module.Application,
    Database: Module.Database,
    Octokit: Module.Octokit,
    Router: Module.Router,
    Axios: Module.Axios,
    API: Module.API,
    ORM: Module.ORM
};
exports.Application = Module.Application;
exports.Compression = Module.Compression;
exports.Database = Module.Database;
exports.Octokit = Module.Octokit;
exports.Router = Module.Router;
exports.Axios = Module.Axios;
exports.API = Module.API;
exports.ORM = Module.ORM;
