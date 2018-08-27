const core = require('gls-core-service');
const BasicMain = core.services.BasicMain;
const stats = core.statsClient;

class Main extends BasicMain {
    constructor() {
        super(stats);

        // TODO -
    }
}

module.exports = Main;
