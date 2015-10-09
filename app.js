var services = require('./services');
var async = require('async');
var _ = require('lodash');

var lights = [
    {
        name: 'north',
        color: 'green'
    },
    {
        name: 'south',
        color: 'green'
    },
    {
        name: 'east',
        color: 'red'
    },
    {
        name: 'west',
        color: 'red'
    }]

var start = new Date();

console.log('Intersection app started at ' + start);
services.displayColors(lights);

setInterval(function () {
    async.waterfall([
    function (callback) {
            services.changeToYellow(lights, function (err, lights) {
                services.displayColors(lights);
                callback(err, lights);
            });
    },
    function (lights, callback) {
            services.changeFromYellow(lights, function (err, lights) {
                services.displayColors(lights);
                callback(err, lights);
            });
    }
], function (err, result) {});
}, 10000);