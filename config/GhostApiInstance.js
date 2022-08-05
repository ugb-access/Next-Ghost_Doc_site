import GhostContentAPI from "@tryghost/content-api";

import { ghostApiUrl, ghostContentKey } from "./index";

const GhostApiInstance = new GhostContentAPI({
    url: ghostApiUrl,
    key: ghostContentKey,
    version: "v5.0",
});



export default GhostApiInstance;
