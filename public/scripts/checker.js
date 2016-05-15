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