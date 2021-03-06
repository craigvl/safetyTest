var services = require('./services');
var expect = require("chai").expect;
var assert = require("chai").assert;

describe("Traffic light app", function () {

    describe("Set green lights to yellow", function () {
        it("Changes the green lights to yellow, red remain red", function () {

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

            services.greenToYellowRedRemainsRed(lights, function (err, lights) {
                expect(lights[0].color).to.equal("yellow");
                expect(lights[1].color).to.equal("yellow");
                expect(lights[2].color).to.equal("red");
                expect(lights[3].color).to.equal("red");
            });
        });
    });

    describe("Set the red lights to green", function () {
        it("Changes the yellow lights to red, red lights to green", function () {

            var lights = [
                {
                    name: 'north',
                    color: 'yellow'
                },
                {
                    name: 'south',
                    color: 'yellow'
                },
                {
                    name: 'east',
                    color: 'red'
                },
                {
                    name: 'west',
                    color: 'red'
                }]

            services.yellowtoRedRedToGreen(lights, function (err, lights) {
                expect(lights[0].color).to.equal("red");
                expect(lights[1].color).to.equal("red");
                expect(lights[2].color).to.equal("green");
                expect(lights[3].color).to.equal("green");
            });
        });
    });
 
    describe("Must provides lights.", function () {
        it("Check that error is thrown if no lights are provided", function () {
            services.greenToYellowRedRemainsRed(null, function (err, lights) {
                assert.isNotNull(err, 'Should not be null since no lights were passed.');
            });
        });
    });
});