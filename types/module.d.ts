export const API: typeof express;
export const Application: import("express-serve-static-core").Express;
export const Router: typeof express.Router;
export const Compression: typeof compression;
/***
 * @type {import('axios').AxiosStatic}
 */
export const Axios: import('axios').AxiosStatic;
/***
 * @type {{Octokit: any, createNodeMiddleware: any, App: any, OAuthApp: any}}
 */
export const Octokit: {
    Octokit: any;
    createNodeMiddleware: any;
    App: any;
    OAuthApp: any;
};
/***
 * @type {import("mongodb")}
 */
export const Database: typeof mongodb;
/***
 * @type {import("mongoose")}
 */
export const ORM: typeof mongoose;
import express from "express";
import compression from "compression";
import mongodb from "mongodb";
import mongoose from "mongoose";
//# sourceMappingURL=module.d.ts.map