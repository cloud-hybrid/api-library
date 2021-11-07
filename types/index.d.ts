export default Library;
declare namespace Library {
    export { Compression };
    export { Framework };
    export { Database };
    export { Octokit };
    export { Router };
    export { Fetch };
    export { ORM };
}
import { Compression } from "./module";
import { Framework } from "./module";
import { Database } from "./module";
import { Octokit } from "./module";
import { Router } from "./module";
export const Fetch: Promise<typeof import("node-fetch")>;
import { ORM } from "./module";
export { Compression, Framework, Database, Octokit, Router, ORM };
//# sourceMappingURL=index.d.ts.map