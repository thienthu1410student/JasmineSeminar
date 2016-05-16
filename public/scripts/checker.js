function isBinary(s) {
	for (i = 0; i < s.length; i++) {
    	if(s[i] != '0' && s[i] != '1')
    		return false;
	}
	return true;
} 

function isDecimal(s) {
	for (i = 0; i < s.length; i++) {
    	if(s[i] < '0' || s[i] > '9')
    		return false;
	}

	return true;
}

function isHex(s) {
	s = s.toUpperCase();

	for (i = 0; i < s.length; i++) {
    	if(((s[i] >= '0' && s[i] <= '9') || (s[i] >= 'A' && s[i] <= 'F')) == false)
    		return false;
	}

	return true;
}

function isHexChar(c) {	
	if((c >= '0' && c <= '9') || (c >= 'A' && c <= 'F'))
		return true;
	return false;	    	
}