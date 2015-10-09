var http = require('http');
var async = require('async');
var Q = require('q');
var _ = require('lodash');


/*http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Intersection App');

}).listen(8080);*/

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
displayColors(lights);

setInterval(function () {
    switchLights(lights).then(function (responseText) {
        changeFromYellow(lights, function (err, lights) {
            console.log('change from yellow done');
            displayColors(lights);
        });
    })
}, 60000);

function switchLights(lights) {

    changeToYellow(lights, function (err, lights) {
        console.log('change to yellow done');
        displayColors(lights);
    });

    var deferred = Q.defer();
    setTimeout(function () {
        deferred.resolve('sss');
    }, 3000);

    return deferred.promise;
}

function displayColors(lights) {
    var now = new Date();
    console.log('--------------------------------------------------------');
    async.each(lights, function (light, callback) {
        console.log('At ' + now + ' ' + light.name + ' is ' + light.color);
    });
}

function changeToYellow(lights, cb) {

    console.log('Change to Yellow');
    async.each(lights, function (light, callbackdone) {

        if (light.color === 'green') {
            light.color = 'yellow';
            callbackdone();
        } else {
            light.color = 'red';
            callbackdone();
        }


    }, function (err) {
        cb(null, lights)
    });
}

function changeFromYellow(lights, cb) {

    console.log('Change from Yellow');
    async.each(lights, function (light, callbackdone) {

        if (light.color === 'yellow') {
            light.color = 'red';
            callbackdone();
        } else {
            light.color = 'green';
            callbackdone();

        }

    }, function (err) {
        cb(null, lights)
    });

}