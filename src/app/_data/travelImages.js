import { getDb } from "../_config/db";
import { ENV } from "../_config/env";

export const getRandomTravelImages = async (limit) => {
    const db = await getDb(ENV.dbPath);
    const results = await db.all(`
        SELECT *
        FROM travel_images
        ORDER BY RANDOM()
        LIMIT ?
        `, [limit]);
    return results;
}