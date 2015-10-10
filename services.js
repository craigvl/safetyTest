var async = require('async');
var moment = require('moment');

module.exports = {


    greenToYellowRedRemainsRed: function (lights, cb) {
        if (lights) {
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
        } else {
            cb(new Error('Please provide some lights!'))
        }
    },


    yellowtoRedRedToGreen: function (lights, cb) {
        if (lights) {
            async.each(lights, function (light, callbackdone) {
                if (light.color === 'yellow') {
                    light.color = 'red';
                    callbackdone();
                } else {
                    light.color = 'green';
                    callbackdone();
                }
            }, function (err) {
                cb(null, lights);
            });
        } else {
            cb(new Error('Please provide some lights!'))
        }
    },


    outputColorsToConsole: function (lights) {
        if (lights) {
            var now = new Date();
            var m = moment();
            console.log('--------------------------------------------------------');
            async.each(lights, function (light, callback) {
                console.log(m.format("h:mm:ss a") + ' ' + light.name + ' is ' + light.color);
            });
        } else {
            console.log('No lights?');
        }
    }
};