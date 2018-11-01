const core = require('gls-core-service');
const BasicMain = core.services.BasicMain;
const stats = core.utils.statsClient;
const env = require('./data/env');

class Main extends BasicMain {
    constructor() {
        super(stats, env);

        // TODO -
    }
}

module.exports = Main;
