import GhostApiInstance from "../config/GhostApiInstance";

export async function getSinglePage({slug}) {
    const page = await GhostApiInstance.pages.read({slug});
    return page;
}

