import * as Framework from "./module.cjs";

export const Library = {
    Framework: () => Framework.Framework(),
    Router: Framework.Router,
    Route: Framework.Route,
    Database: Framework.Database,
    ORM: Framework.ORM
};

export default Framework.default;
