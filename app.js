var services = require('./services');
var async = require('async');
var Q = require('q');
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
    switchLights(lights).then(function () {
        services.changeFromYellow(lights, function (err, lights) {
            services.displayColors(lights);
        });
    })
}, 10000);

function switchLights(lights) {

    services.changeToYellow(lights, function (err, lights) {
        services.displayColors(lights);
    });

    var deferred = Q.defer();
    setTimeout(function () {
        deferred.resolve();
    }, 3000);

    return deferred.promise;
}