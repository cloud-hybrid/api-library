/***
 *  * @type {import("express")}
 */
import express from "express";
export var API = express;
export var Application = API();
export var Router = API.Router;
import compression from "compression";
export var Compression = compression;
import axios from "axios";
/***
 * @type {import('axios').AxiosStatic}
 */
export var Axios = axios;
import octokit from "octokit";
/***
 * @type {{Octokit: any, createNodeMiddleware: any, App: any, OAuthApp: any}}
 */
export var Octokit = octokit;
import mongodb from "mongodb";
/***
 * @type {import("mongodb")}
 */
export var Database = mongodb;
import mongoose from "mongoose";
/***
 * @type {import("mongoose")}
 */
export var ORM = mongoose;
