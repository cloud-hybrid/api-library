import express from "express";

export const API = express;
export const Application = API();
export const Router = API.Router;

import { default as compression } from "compression";

export const Compression = compression;

import * as axios from "axios";

export const Axios = axios.default;

import * as octokit from "octokit";

export const Octokit = octokit;

import * as database from "mongodb";

export const Database = database;

import * as orm from "mongoose";

export const ORM = orm;
