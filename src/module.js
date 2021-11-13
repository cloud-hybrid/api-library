/***
 *  * @type {import("express")}
 */

import express from "express";

export const API = express;
export const Application = API();
export const Router = API.Router;

import compression from "compression";

export const Compression = compression;

import axios from "axios";

/***
 * @type {import('axios').AxiosStatic}
 */

export const Axios = axios;

import octokit from "octokit";

/***
 * @type {{Octokit: any, createNodeMiddleware: any, App: any, OAuthApp: any}}
 */

export const Octokit = octokit;

import mongodb from "mongodb";

/***
 * @type {import("mongodb")}
 */

export const Database = mongodb;

import mongoose from "mongoose";

/***
 * @type {import("mongoose")}
 */

export const ORM = mongoose;
