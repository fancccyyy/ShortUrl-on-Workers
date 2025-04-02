export default async function queryExist(query, env) {
    const existing_query = env.DB.prepare(
        `SELECT * FROM links WHERE short = ?`
    );
    const existing = await existing_query.bind(query).run();
    return existing;
}