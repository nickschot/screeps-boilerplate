// Brocfile.js
const Rollup = require('broccoli-rollup');
const babel = require('rollup-plugin-babel');

const appRoot = 'app';

// Rollup dependencies
let js = new Rollup(appRoot, {
    inputFiles: ['**/*.js'],
    rollup: {
        entry: 'main.js',
        dest: 'main.js',
        sourceMap: false,
        plugins: [babel()]
    }
});

module.exports = js;