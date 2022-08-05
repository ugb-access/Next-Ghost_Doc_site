import cookie from "cookie";
export function parseCookies(req) {
    if (!req || !req.headers) {
        return {};
    }
    return cookie.parse(req.headers.cookie || "");
}
