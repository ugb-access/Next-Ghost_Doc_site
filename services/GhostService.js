import GhostApiInstance from "../config/GhostApiInstance";


export async function getSinglePage() {
    const page = await GhostApiInstance.pages.read({slug: "docs"});
    return page;
}

