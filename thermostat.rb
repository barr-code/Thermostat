require 'sinatra'
require 'net/http'

get '/' do
	erb :index
end

get '/weather' do
	uri = URI('http://www.myweather2.com/developer/forecast.ashx?uac=5F24roqks4&output=xml&query=SW1')
	Net::HTTP.get(uri)
end