var async = require('async');

module.exports = {
    changeToYellow: function (lights, cb) {
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
    },
    changeFromYellow: function (lights, cb) {
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

    },
    displayColors: function (lights) {

        var now = new Date();
        console.log('--------------------------------------------------------');
        async.each(lights, function (light, callback) {
            console.log('At ' + now + ' ' + light.name + ' is ' + light.color);
        });
    }
};