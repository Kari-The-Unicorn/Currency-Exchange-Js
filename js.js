$(function() {
	var button = document.getElementById('mainBtn');
//global variables
	var data;
	var data2;
	var input1 = 0;
	var url;
	var url2;
	var result;
//reading Amount
	function extractFormInput(){
		var selectedCurrencyFrom = document.querySelector('select#from').value;
		var selectedCurrencyTo = document.querySelector('select#to').value;
		var fromAmount = $("#from_input").val();
		input1 = parseFloat(fromAmount);
		switch (selectedCurrencyFrom){
		    case 'AUD':
		        url = 'http://api.nbp.pl/api/exchangerates/rates/a/aud/';
		        break;
		    case 'RUB':
				url = 'http://api.nbp.pl/api/exchangerates/rates/a/rub/';
		        break;
			case 'USD':
				url = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/';
				break;
			case 'EUR':
				url = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/';
				break;
			case 'GBP':
				url = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/';
				break;
		}
		switch (selectedCurrencyTo){
		    case 'AUD':
		        url2 = 'http://api.nbp.pl/api/exchangerates/rates/a/aud/';
		        break;
			case 'RUB':
				url2 = 'http://api.nbp.pl/api/exchangerates/rates/a/rub/';
		        break;
			case 'USD':
				url2 = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/';
				break;
			case 'EUR':
				url2 = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/';
				break;
			case 'GBP':
				url2 = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/';
				break;
		}
	}
//reading result
	function displayResult(res){
		$('#to_input').val(res.toString());
	}
//ajax
    function loadDataIn(url1) {
        $.ajax({ 
			url: url1
        })
        .done(function(response) {
			data = response.rates[0].mid;
			return data;
        })
        .fail(function(error) {
            console.log(error);
        })
	} 
	function loadDataOut(url2) {
        $.ajax({ 
			url: url2		
        })
        .done(function(response) {
			data2 = response.rates[0].mid;
			return data2;
        })
        .fail(function(error) {
            console.log(error);
        })
	} 
//button event
	button.addEventListener('click', function(){
//read input data
		extractFormInput();
//ajax
		loadDataIn(url);
		loadDataOut(url2);
//waiting 100s for response
		setTimeout(function() {	
//result
			result = (input1 * data)/data2;
//display result
			displayResult(result);
		}, 100);
	});
});