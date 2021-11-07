"use strict";
exports.__esModule = true;
exports.ORM = exports.API = exports.Axios = exports.Router = exports.Octokit = exports.Database = exports.Framework = exports.Compression = exports.Application = exports.Library = void 0;
var tslib_1 = require("tslib");
var $ = (0, tslib_1.__importStar)(require("./module.js"));
exports.Library = {
    Compression: $.Compression,
    Application: $.Application,
    Framework: $.Application,
    Database: $.Database,
    Octokit: $.Octokit,
    Router: $.Router,
    Axios: $.Axios,
    API: $.API,
    ORM: $.ORM
};
exports["default"] = exports.Library;
exports.Application = exports.Library.Application;
exports.Compression = exports.Library.Compression;
exports.Framework = exports.Library.Framework;
exports.Database = exports.Library.Database;
exports.Octokit = exports.Library.Octokit;
exports.Router = exports.Library.Router;
exports.Axios = exports.Library.Axios;
exports.API = exports.Library.API;
exports.ORM = exports.Library.ORM;
