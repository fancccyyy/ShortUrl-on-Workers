export default async function dummy(env) {
    const e = env.DB.prepare(`SELECT * FROM links`);
    const res = await e.run();
    console.log(res);
    return res;
}