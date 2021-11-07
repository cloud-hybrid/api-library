const {
    // @ts-ignore
    Compression,
    Framework,
    Database,
    Octokit,
    Router,
    ORM
} = require("./module");

const Fetch = import("node-fetch").then((Module) => Module);

const Library = {
    Compression,
    Framework,
    Database,
    Octokit,
    Router,
    Fetch,
    ORM
};

module.exports.default = Library;

module.exports.Compression = Compression;
module.exports.Framework = Framework;
module.exports.Database = Database;
module.exports.Octokit = Octokit;
module.exports.Router = Router;
module.exports.Fetch = Fetch;
module.exports.ORM = ORM;
