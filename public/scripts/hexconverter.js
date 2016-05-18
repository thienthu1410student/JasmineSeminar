function toHex() {
	var hexString;
	calculate(document.getElementById('txtFieldString').value);
	switch(base) {
		case 2:
			hexString = binToHex(txtFieldString.value);
			break;
        case 8:
            hexString = octToHex(txtFieldString.value);
            break;
		case 10:
			hexString = decToHex(Number(txtFieldString.value));
			break;	
		case 16:
			hexString = txtFieldString.value;		
			break;
	}

	base = 16;
	txtFieldString.value = hexString;
}

function binToHex(s) {
	if(isBinary(s) == false)
		return "Is not Binary";

    var i, k, part, accum, ret = '';
    for (i = s.length-1; i >= 3; i -= 4) {
        part = s.substr(i+1-4, 4);
        accum = 0;
        for (k = 0; k < 4; k += 1) {
            accum = accum * 2 + parseInt(part[k], 10);
        }
        if (accum >= 10) {
            ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
        } else {
            ret = String(accum) + ret;
        }
    }
    if (i >= 0) {
        accum = 0;
        for (k = 0; k <= i; k += 1) {
            accum = accum * 2 + parseInt(s[k], 10);
        }
        ret = String(accum) + ret;
    }
    return ret.toUpperCase();
}

function decToHex(n) {
	if(isDecimal(n.toString()) == false)
		return "Is not Decimal";

	return n.toString(16).toUpperCase();
}

function octToHex(s){
    if (isOct(s) == false)
        return "Is not Octal";
    var tmp = parseInt(s, 8);
    return tmp.toString(16).toUpperCase();
}