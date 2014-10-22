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
			thermostat.increaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(25);
		});

		it('can decrease the temperature by 5', function(){
			thermostat.decreaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(15);
		});

		it('has a reset that reverts temperature to 20 degrees', function(){
			thermostat.decreaseTemperatureBy(8);
			thermostat.reset();
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe('extremes', function(){

		it('has a minimum temperature of 10 degrees', function(){
			expect(thermostat.minTemp).toEqual(10);
		});

		it('has a maximum temperature of 25 degrees in power saving mode', function(){
			expect(thermostat.maxTemp).toEqual(25);
		});

		it('can turn power saving mode off', function(){
			thermostat.powerSaverSwitch();
			expect(thermostat.isPowerSaverOn).toBe(false);
		});

		it('has a maximum temperature of 32 degrees when power saver is off', function(){
			thermostat.powerSaverSwitch();
			expect(thermostat.maxTemp).toEqual(32);
		});

		it('cannot be set below its minimum temperature', function(){
			expect(thermostat.decreaseTemperatureBy(11)).toEqual('Cannot set below 10 degrees.');
		});

		it('cannot be set above 25 degrees in power saver mode', function(){
			expect(thermostat.increaseTemperatureBy(6)).toEqual('Cannot set above 25 degrees.');
		});

		it('can increase temperature up to 32 degrees when power saver is off', function(){
			thermostat.powerSaverSwitch();
			thermostat.increaseTemperatureBy(12);

			expect(thermostat.temperature).toEqual(32);
		});

		it('cannot be set above 32 degrees when power saver mode is off', function(){
			thermostat.powerSaverSwitch();
			expect(thermostat.increaseTemperatureBy(13)).toEqual('Cannot set above 32 degrees.')
		});

	});

	describe('colors', function(){

		it('is yellow by default', function(){
			expect(thermostat.color).toEqual('purple')
		});

		it('can change color', function(){
			thermostat.changeColor('black');
			expect(thermostat.color).toEqual('black');
		});

		it('changes to red when temp is above 25', function(){
			thermostat.increaseTemperatureBy(5)
			expect(thermostat.color).toEqual('red');
		});

		it('changes to blue when temp is below 18', function(){
			thermostat.decreaseTemperatureBy(5)
			expect(thermostat.color).toEqual('blue');
		});
	});
});