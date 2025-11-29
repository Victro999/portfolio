import { getDb } from "../_config/db";
import { ENV } from "../_config/env";

export const getAllProjects = async () => {
    const db = await getDb(ENV.dbPath);
    const results = await db.all(`
        SELECT *
        FROM projects
    `);
    return results;
}

export const getProjectById = async (id) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.get(`
        SELECT *
        FROM projects
        WHERE id = ?
    `, [id]);
    return results;
}

export const getRandomProjects = async (limit) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.all(`
        SELECT *
        FROM projects
        ORDER BY RANDOM()
        LIMIT ?
        `, [limit]);
    return results;
}
