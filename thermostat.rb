require 'sinatra'
require 'net/http'
require 'json'

get '/' do
	erb :index
end

get '/weather' do
	uri = URI('http://www.myweather2.com/developer/forecast.ashx?uac=5F24roqks4&output=json&query=SW1')
	Net::HTTP.get(uri)
end