const path = require('path');
const {config} = require('./wdio.shared.conf.js');

config.port = 4723;

//
// ==================
// Specify Test Files
// ==================
// Define which test specs should run. The pattern is relative to the directory
// from which `wdio` was called.
//
// The specs are defined as an array of spec files (optionally using wildcards
// that will be expanded). The test for each spec file will be run in a separate
// worker process. In order to have a group of spec files run in the same worker
// process simply enclose them in an array within the specs array.
//
// If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
// then the current working directory is where your `package.json` resides, so `wdio`
// will be called from there.
//
config.specs = [
    './test/specs/ios/*.spec.js'
];

config.capabilities = [
    {
        platformName: "ios",
        "appium:deviceName": "iPhone 14 Pro",
        "appium:automationName": "XCUITest",
        "appium:platformVersion": "16.0",
        "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),

    }];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [
    ['appium',
        {
            logPath: "./"
        }

    ]];

exports.config = config;