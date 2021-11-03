module.exports.Framework = require("express");
module.exports.Router = require("express").Router;
module.exports.Route = require("express").Route;

module.exports.Database = require("mongodb");
module.exports.ORM = require("mongoose");

module.exports.default = module.exports.Framework;
