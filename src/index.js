import * as $ from "./module.js";

export const Library = {
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

export default Library;

export const Application = Library.Application;
export const Compression = Library.Compression;
export const Framework = Library.Framework;
export const Database = Library.Database;
export const Octokit = Library.Octokit;
export const Router = Library.Router;
export const Axios = Library.Axios;
export const API = Library.API;
export const ORM = Library.ORM;