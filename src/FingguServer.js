const express = require('express');
const bodyParser = require('body-parser');
const FingguDatabase = require('./FingguDatabase');

class FingguServer {
    constructor() {
        this.app = express();
        this.database = new FingguDatabase();
        this.app.use(bodyParser.json());
        this.routes();
    }

    routes() {
        this.app.get('/api/deployments', this.getDeployments.bind(this));
        this.app.post('/api/sync', this.syncCode.bind(this));
        this.app.post('/api/rollback', this.rollbackCode.bind(this));
    }

    start() {
        this.app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }

    async getDeployments(req, res) {
        const deployments = await this.database.getDeployments();
        res.json(deployments);
    }

    async syncCode(req, res) {
        const result = await this.database.syncCode(req.body);
        res.json(result);
    }

    async rollbackCode(req, res) {
        const result = await this.database.rollbackCode(req.body);
        res.json(result);
    }
}

module.exports = FingguServer;