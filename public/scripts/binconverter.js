function toBin(){
    var result;
    calculate(document.getElementById('txtFieldString').value);
    switch(base) {
        case 2:
            result = txtFieldString.value;       
            break;
        case 8:
            result = octToBin(txtFieldString.value);
            break;
        case 10:
            result = decToBin(txtFieldString.value);       
            break;  
        case 16:
            result = hexToBin(txtFieldString.value);
            break;
    }

    base = 2;
    txtFieldString.value = result;
}

function hexToBin(s){
    if (isHex(s) == false)
        return "Is not Hex"
    var tmp = hexToDec(s);
    return decToBin(tmp);
}

function decToBin(s){
    if (isDecimal(s) == false)
        return "Is not Decimal"
    return Number(s).toString(2);
}

function octToBin(s){
    if (isOct(s) == false)
        return "Is not Octal";
    var tmp = parseInt(s, 8);
    return tmp.toString(2);
}