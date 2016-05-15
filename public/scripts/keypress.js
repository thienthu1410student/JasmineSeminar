function isNumber(charCode) {
	var chr = String.fromCharCode(charCode);
	chr = chr.toLowerCase();
	return ('0' <= chr && chr <= '9');
}

function isHexChar(charCode) {
	var chr = String.fromCharCode(charCode);
	chr = chr.toUpperCase();
	return ('A' <= chr && chr <= 'F');
}

function isOperant(charCode) {
	var chr = String.fromCharCode(charCode);
	chr = chr.toLowerCase();
	return (chr == '+' || chr == '-' || chr == '*' || chr == '/');
}

function isValidate(charCode) {
	return (isNumber(charCode) || isHexChar(charCode) || isOperant(charCode));	
}

$(document).keypress(function(key) {
    if(isValidate(key.which)) 
    	txtFieldString.value += String.fromCharCode(key.which).toUpperCase();
});

$(document).ready(function() { 
	 document.getElementById("txtFieldString").readOnly = true;
});