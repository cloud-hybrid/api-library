
const Framework = require("express");

const Compression = require("compression");

const Axios = require("axios")

const Octokit = require("octokit");

const Router = require("express").Router;

const Database = require("mongodb");

const ORM = require("mongoose");

module.exports.Framework = Framework;
module.exports.Compression = Compression;
module.exports.Router = Router;
module.exports.Database = Database;
module.exports.ORM = ORM;
module.exports.Axios = Axios;
module.exports.Octokit = Octokit;
