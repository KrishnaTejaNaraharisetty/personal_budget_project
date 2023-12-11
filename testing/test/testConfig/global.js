const allureReporter = require('nightwatch-allure');
//const uploadFiles = require('./testInputFiles/newPartRegestrationFiles/')
module.exports = {
    reporter: (results,done)=>{
        const reporter = new allureReporter.NightwatchAllureReporter({});
        reporter.write(results,done);
    },
    launch_url: 'http://159.203.70.22:3001',
    home_URL: '',
    userName: '',
    accessKey: '',
}