const { Pool } = require('pg');
const FINGGU_DB_CONFIG = {
    user: 'dbuser',
    host: 'localhost',
    database: 'codesync',
    password: process.env.DB_PASSWORD,
    port: 5432,
};

class FingguDatabase {
    constructor() {
        this.pool = new Pool(FINGGU_DB_CONFIG);
    }

    async getDeployments() {
        const res = await this.pool.query('SELECT * FROM finggu_deployments');
        return res.rows;
    }

    async syncCode(data) {
        const res = await this.pool.query('INSERT INTO finggu_deployments (code, version) VALUES ($1, $2) RETURNING *', [data.code, data.version]);
        return res.rows[0];
    }

    async rollbackCode(data) {
        const res = await this.pool.query('DELETE FROM finggu_deployments WHERE version = $1 RETURNING *', [data.version]);
        return res.rows[0];
    }
}

module.exports = FingguDatabase;