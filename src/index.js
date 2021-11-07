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

module.exports = Library;