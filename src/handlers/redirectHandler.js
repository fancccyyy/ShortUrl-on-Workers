import queryExist from "../utils/queryExist"

export default async function redirectHandler(url, path, ip, env) {
    const redirect = await queryExist(path, env);

    if (!redirect.success || redirect.results.length === 0) {
        return new Response("Not found", { status: 404 })
    }
    if (redirect.results[0].expire_time && redirect.results[0].expire_time < Date.now()) {
        return new Response("Expired", { status: 410 })
    }
    return Response.redirect(`https://${redirect.results[0].url}`, 302)
}