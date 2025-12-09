import { getDb } from "../_config/db";
import { ENV } from "../_config/env";

export const getAllProjects = async () => {
    const db = await getDb(ENV.dbPath);
    const results = await db.all(`
        SELECT slug, title_fr, title_en, img, tags
        FROM projects_with_tags
    `);
    return results;
}

export const getProjectById = async (id) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.get(`
        SELECT *
        FROM projects_with_tags
        WHERE id = ?
    `, [id]);
    return results;
}

export const getProjectBySlug = async (slug) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.get(`
        SELECT *
        FROM projects_with_tags
        WHERE slug = ?
    `, [slug]);
    return results;
}

export const getRandomProjects = async (limit) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.all(`
        SELECT *
        FROM projects_with_tags
        ORDER BY RANDOM()
        LIMIT ?
        `, [limit]);
    return results;
}
