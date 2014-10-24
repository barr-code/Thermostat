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
		if(parseInt($('#temperature').text()) <= 18) $('body').css('background-color', 'blue');
		else if(parseInt($('#temperature').text()) < 25) $('body').css('background-color', 'purple');
		else $('body').css('background-color', 'red');
	});
};

$(document).ready(function(){
	$.getJSON('/weather', function(data){
		$('#outdoorTemp').text('Temp Outside:' + data['weather']['curren_weather'][0]['temp']);
	});
	var thermoview = new ThermoView('#temperature');

	$('#powersaver').on('click', function(){
		$('#powerstatus').text(thermoview.thermostat.powerSaverSwitch());
		$('#temperature').text((thermoview.thermostat.temperature));
	});
});