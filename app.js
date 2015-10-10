var services = require('./services');

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

console.log('Intersection simulation started at ' + start);
services.outputColorsToConsole(lights);
main();


function main() {

    //at 4mins 30secs - green lights turn yellow, red lights remain red.

    setTimeout(function () {

        services.greenToYellowRedRemainsRed(lights, function (err, lights) {
            services.outputColorsToConsole(lights);
        });

    }, 270000);


    //at 5mins - yellow lights turn red, red lights turn green.

    setTimeout(function () {

        services.yellowtoRedRedToGreen(lights, function (err, lights) {
            services.outputColorsToConsole(lights);
        });

    }, 300000);

    setTimeout(main, 300000);

}