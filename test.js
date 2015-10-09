var services = require('./services');
var _ = require('lodash');
var expect = require("chai").expect;

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

describe("Traffic light app", function () {
    describe("Set green lights to yellow", function () {
        it("Changes the green lights to yellow and keep red lights red", function () {
            services.changeToYellow(lights, function (err, lights) {
                expect(lights[0].color).to.equal("yellow");
                expect(lights[1].color).to.equal("yellow");
                expect(lights[2].color).to.equal("red");
                expect(lights[3].color).to.equal("red");
            });
        });
    });

    describe("Set the yellow lights to red", function () {
        it("Changes the yellow lights to red and red lights to green", function () {
            services.changeFromYellow(lights, function (err, lights) {
                expect(lights[0].color).to.equal("red");
                expect(lights[1].color).to.equal("red");
                expect(lights[2].color).to.equal("green");
                expect(lights[3].color).to.equal("green");
            });
        });
    });

});