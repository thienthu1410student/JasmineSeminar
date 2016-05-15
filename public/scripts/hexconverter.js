function toHex() {
	var hexString;
	calculate(document.getElementById('txtFieldString').value);
	switch(base) {
		case 2:
			hexString = binToHex(calResult.toString());
			break;
		case 10:
			hexString = decToHex(calResult);
			break;	
		case 16:
			hexString = txtFieldString.value;		
			break;
	}

	base = 16;
	txtFieldString.value = hexString;
	calResult = hexString;
}

function binToHex(s) {
	if(isBinary(s) == false)
		return "Is not binary";

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
		return "Is not decimal";

	return n.toString(16).toUpperCase();
}