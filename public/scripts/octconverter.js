function toOct(){
    var octString;
    calculate(document.getElementById('txtFieldString').value);
    switch(base) {
        case 2:
            octString = binToOct(txtFieldString.value);      
            break;
        case 8:
        	octString = txtFieldString.value;
        	break;
        case 10:
            octString = decToOct(Number(txtFieldString.value));       
            break;  
        case 16:
            octString = hexToOct(txtFieldString.value);
            break;
    }

    base = 8;
    txtFieldString.value = octString;
}

function hexToOct(s){
	if (isHex(s) == false)
		return "Is not Hex";
	var tmp = parseInt(s, 16);
	return tmp.toString(8);
}

function decToOct(s){
	if (isDecimal(s) == false )
        return "Is not Decimal";
    var tmp = parseInt(s, 10);
	return tmp.toString(8);
}

function binToOct(s){
	if(isBinary(s) == false)
		return "Is not Binary";
	var tmp = parseInt(s, 2);
	return tmp.toString(8);
}