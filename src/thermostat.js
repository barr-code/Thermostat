function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemp = 10;
	this.maxTemp = 25;
	this.color = 'purple'
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this.temperature + degrees <= this.maxTemp) {
		if(this.temperature + degrees >= 25) { 
			this.changeColor('red');
			}
		return this.temperature += degrees;
		}
	else { 
		return 'Cannot set above ' + this.maxTemp + ' degrees.'};
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - degrees >= this.minTemp) {
		if(this.temperature - degrees <= 18) { 
			this.changeColor('blue');
			}
		this.temperature -= degrees;
		}
	else {
		return 'Cannot set below 10 degrees.'};
};

Thermostat.prototype.turnPowerSaverOff = function() {
	this.isPowerSaverOn = false;
	this.maxTemp = 32;
};

Thermostat.prototype.reset = function() {
	this.temperature = 20;
};

Thermostat.prototype.changeColor = function(color) {
	this.color = color;
};