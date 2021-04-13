let common = [
    'cucumber-js ./src/features/**/*.feature',
    '--require-module ts-node/register',
    '--require ./src/locators/*.json',
    '--require ./src/step_definitions/*.ts',
    '--format progress-bar',
].join(' ');

module.exports = {
    default: common,
    // More profiles can be added if desired
};
