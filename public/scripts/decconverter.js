function toDec() {
	var decString;
	calculate(document.getElementById('txtFieldString').value);
	switch(base) {
		case 2:
			decString = binToDec(txtFieldString.value);
			break;
		case 8:
            decString = octToDec(txtFieldString.value);
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
}

function binToDec(s) {
	if(isBinary(s) == false)
		return "Is not Binary";
  
    return parseInt(s, 2);
}

function hexToDec(s) {
	if(isHex(s.toString()) == false)
		return "Is not Hex";

    return parseInt(s, 16);
}

function octToDec(s){
    if (isOct(s) == false)
        return "Is not Octal";
    var tmp = parseInt(s, 8);
    return tmp.toString(10);
}