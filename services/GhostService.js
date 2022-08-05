import GhostApiInstance from "../config/GhostApiInstance";

export async function getSinglePage({ slug }) {
   
    const page = null

    if (page) {
        return page;
    } else {
        return null;
    }
}

export async function getLatestPosts() {
    const posts = await GhostApiInstance.posts.browse({
        limit: 5,
        include: "tags,authors",
    });
    return posts;
}
