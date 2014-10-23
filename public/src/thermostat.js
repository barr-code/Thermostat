function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minTemp = 10;
	this.maxTemp = 25;
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this.temperature + degrees <= this.maxTemp) {
		return this.temperature += degrees;
		}
	else { 
		return 'Cannot set above ' + this.maxTemp + ' degrees.'};
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - degrees >= this.minTemp) {
		return this.temperature -= degrees;
		}
	else {
		return 'Cannot set below 10 degrees.'};
};

Thermostat.prototype.powerSaverSwitch = function() {
	if(this.isPowerSaverOn === true) {
		this.isPowerSaverOn = false;
		this.maxTemp = 32;
		return 'Power Saver : Off';}
	if(this.isPowerSaverOn === false) {
		this.isPowerSaverOn = true;
		this.maxTemp = 25;
		this.temperature = 20;
		return 'Power Saver : On';
	}
};

Thermostat.prototype.reset = function() {
	this.temperature = 20;
};

Thermostat.prototype.changeColor = function(color) {
	this.color = color;
};