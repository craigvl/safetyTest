var async = require('async');

module.exports = {
    changeToYellow: function (lights, cb) {
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
    changeFromYellow: function (lights, cb) {
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
                setTimeout(function () {
                    cb(null, lights)
                }, 3000);
            });
        } else {
            cb(new Error('Please provide some lights!'))
        }
    },
    displayColors: function (lights) {
        if (lights) {
            var now = new Date();
            console.log('--------------------------------------------------------');
            async.each(lights, function (light, callback) {
                console.log('At ' + now + ' ' + light.name + ' is ' + light.color);
            });
        } else {
            console.log('No lights?');
        }
    }
};