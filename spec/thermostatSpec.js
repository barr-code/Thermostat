"use strict";
describe('Thermostat', function(){

	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	describe('By default', function(){

		it('is set to 20 degrees', function(){
			thermostat = new Thermostat();
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode will be on', function(){
			thermostat = new Thermostat();
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can increase the temperature by one degree', function(){
			thermostat.increaseTemperature()
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease the temperature by one degree', function(){
			thermostat.decreaseTemperature()
			expect(thermostat.temperature).toEqual(19);
		});

	});

	describe('custom options', function(){

		it('can increase the temperature by 12', function(){
			thermostat.increaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(32);
		});

		it('can decrease the temperature by 5', function(){
			thermostat.decreaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(15);
		});

	});
});