function isNumber(chr) {
	return ('0' <= chr && chr <= '9');
}

function isInputHexChar(chr) {
	if(base != 16)
		return false;

	chr = chr.toUpperCase();
	return ('A' <= chr && chr <= 'F');
}

function isOperant(chr) {
	return (chr == '+' || chr == '-' || chr == '*' || chr == '/');
}

function isAssign(charCode) {
	return (charCode === 61 || charCode === 13);
}

function isClear(charCode) {
	//Delete in chrome = 127, firefox = 0
	return (charCode === 0 || charCode === 127);
}

function isHotkey(charCode) {
	if(isClear(charCode)) {
		clear();
	}
	else if(isAssign(charCode)) {
		assign();
	}
	else return false;

	return true;
}

function clear() {
	var str = txtFieldString.value;
	txtFieldString.value = str.substring(0, Math.max(str.length - 1, 0));
}

function clearAll() {
	txtFieldString.value = "";
}

function assign() {
	calculate(txtFieldString.value);
}

function isValidate(chr) {	
	return (isNumber(chr) || isInputHexChar(chr) || isOperant(chr));	
}

$(document).keypress(function(key) {
	if(! isHotkey(key.which)) {
		var chr = String.fromCharCode(key.which);
	    if(isValidate(chr)) {    	
	    	txtFieldString.value += chr.toUpperCase();
	    }
	}
});

$(document).ready(function() { 
	 document.getElementById("txtFieldString").readOnly = true;
});