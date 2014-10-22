$(document).ready(function(){
	var thermostat = new Thermostat();

	$('#uparrow').on('click', function(){
		thermostat.increaseTemperature();
		$('#temperature').text((thermostat.temperature) + '°');
	});

	$('#downarrow').on('click', function(){
		thermostat.decreaseTemperature();
		$('#temperature').text((thermostat.temperature) + '°');
	});
});