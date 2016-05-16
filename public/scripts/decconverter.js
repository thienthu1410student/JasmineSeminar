function toDec() {
	var decString;
	calculate(document.getElementById('txtFieldString').value);
	switch(base) {
		case 2:
			decString = binToDec(txtFieldString.value);
			break;
		case 10:
			decString = txtFieldString.value;		
			break;	
		case 16:
			decString = hexToDec(txtFieldString.value);
			break;
	}

	base = 10;
	txtFieldString.value = decString;
	calResult = null;
}

function binToDec(s) {
	if(isBinary(s) == false)
		return "Is not binary";
  
    return parseInt(s, 2);
}

function hexToDec(s) {
	if(isHex(s.toString()) == false)
		return "Is not decimal";

    return parseInt(s, 16);
}