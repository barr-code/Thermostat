function ThermoView(element) {
	this.element = $(element);
	this.thermostat = new Thermostat;
	this.element.text(this.thermostat.temperature);
	this.connect('#downarrow', this.thermostat, this.thermostat.decreaseTemperature);
	this.connect('#uparrow', this.thermostat, this.thermostat.increaseTemperature);
};

ThermoView.prototype.connect = function(selector, recipient, func) {
	$(selector).on('click', function (){
		$('#temperature').text(func.call(recipient));
	});
};

$(document).ready(function(){
	new ThermoView('#temperature');

	// $('#powersaver').on('click', function(){
	// 	$('#powerstatus').text(thermostat.powerSaverSwitch());
	// 	$('#temperature').text((thermostat.temperature) + '°');
	// });
});