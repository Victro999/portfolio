import { getDb } from "../_config/db";
import { ENV } from "../_config/env";

export const getAllProjects = async () => {
    const db = await getDb(ENV.dbPath);
    const results = await db.all(`
        SELECT slug, title_fr, title_en, preview, tags
        FROM projects_with_tags
    `);
    return results;
}

export const getProjectBySlug = async (slug) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.get(`
        SELECT pwt.*, json_group_array(pi.src) as images
        FROM projects_with_tags pwt
        LEFT JOIN project_images pi ON pi.project_id = pwt.id
        WHERE slug = ?
    `, [slug]);
    return results;
}

export const getRandomProjects = async (limit, exludedSlug) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.all(`
        SELECT slug, title_fr, title_en, preview, tags
        FROM projects_with_tags
        WHERE slug != ?
        ORDER BY RANDOM()
        LIMIT ?
        `, [exludedSlug, limit]);
    return results;
}
