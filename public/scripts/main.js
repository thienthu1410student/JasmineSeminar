var isCalculated = false;
var minNumber = -999999999999999;
var maxNumber = 999999999999999;
var base = 10;

function getCharacter(button)
{
	if (isCalculated === false)
		txtFieldString.value = txtFieldString.value + button.value;

	else 
		{
			isCalculated = false;
			txtFieldString.value = button.value;
		}
}

function getSpecialCharacter(button)
{
	if (isCalculated === false)
	{
	
		txtFieldString.value = txtFieldString.value  + button.value + "(";
	}

	else 
		{
			isCalculated = false;
			txtFieldString.value = button.value + "(";
		}
	counter++;
}

function clearAll()
{
	txtFieldString.value = "";
}

function backSpace()
{
	var str = txtFieldString.value;
	txtFieldString.value = str.substring(0, str.length - 1);
}

function changeMode (button, className)
{
	button.className = button.className.replace(/\bsupport\b/,'chosen');
	var buttons = document.getElementsByClassName(className);
	for (var i = 0; i < buttons.length; ++i)
	{
		if (buttons[i] !== button && buttons[i].className.includes("chosen"))
		{
			buttons[i].className = buttons[i].className.replace(/\bchosen\b/,'support');
			break;

		}
	}	
}

function convert(expression, src, dest)
{
	if (expression.includes(src))
		return dest;
	else
		return "";
}

function errorCatcher()
{
	this.catchError = function (error, condition)
	{
		if (error.includes(condition))
			return true;
		else return false;
	};
}

function Calculator()
{
	this.compute = function(expression)
	{
		try
		{
			var result =  math.eval(expression);
			if (result === Infinity || result === -Infinity || result.type === "Complex")
				return Infinity;
			else if (result <= maxNumber && result >= minNumber)
				return result;
			else
				return "stack overflow";
		}
		catch (err)
		{
			return "error";
		}
	};

	this.convertHEX2DEC = function (src, dest)
		{
			//do something...
		};
}

function calHex(expression) {
	for(i = 0; i < expression.length; i++) 
		if(isHexChar(expression[i])) {			
			var k = i;
			var j = k;
			var hexString = '';
			while(j != expression.length && isHexChar(expression[j]))
				hexString += expression[j++];			
			var value = hexToDec(hexString);
			expression = expression.substring(0, k) + value 
				+ expression.substring(j, expression.length);
			i = j;
		}
	calDec(expression);
	txtFieldString.value = decToHex(Number(txtFieldString.value));
}

function calBin(expression) {
		var tmpString ="";
		for(i = 0; i < expression.length; i++) 
			if(isBinChar(expression[i])) {			
				var k = i;
				var j = k;
				var binString = '';
				while(j != expression.length && isBinChar(expression[j]))
					binString += expression[j++];	
				var value = binToDec(binString);
				tmpString = tmpString + value;
				i = j-1;
			}
			else
			{
				tmpString = tmpString + expression[i];
			}
		calDec(tmpString);
		txtFieldString.value = decToBin(Number(txtFieldString.value));
}

function calOct(expression) {
		var tmpString ="";
		for(i = 0; i < expression.length; i++) 
			if(isOctChar(expression[i])) {		
				var k = i;
				var j = k;
				var octString = '';
				while(j != expression.length && isOctChar(expression[j]))
					octString += expression[j++];	
				var value = octToDec(octString);
				tmpString = tmpString + value;
				i = j-1;
			}
			else
			{
				tmpString = tmpString + expression[i];
			}
		calDec(tmpString);
		txtFieldString.value = decToOct(Number(txtFieldString.value));
}

function calDec(expression) {
	try
	{
		var demi, src;
		var cal = new Calculator();
		console.log(expression.charCodeAt(0));

		//convert from &times; to *
		src = String.fromCharCode(215);
		demi = convert(expression, src, "*");
		if (demi !== "")
		{
			expression = expression.split(src).join(demi);
		}

		//convert from &divide; to /
		src = String.fromCharCode(247);
		demi = convert(expression, src, "/");
		if (demi !== "")
		{
			expression = expression.split(src).join(demi);
		}
		

		//convert from &pi; to pi
		src = String.fromCharCode(960);
		demi = convert(expression, src, "(pi)");
		if (demi !== "")
		{
			expression = expression.split(src).join(demi);
		}

		//convert from &divide; to /
		src = String.fromCharCode(8730);
		demi = convert(expression, src, "sqrt");
		if (demi !== "")
		{
			expression = expression.split(src).join(demi);
		}

		src = "ln";
		demi = convert(expression, src, "log");
		if (demi !== "")
		{
			expression = expression.split(src).join(demi);
		}

		src = "%";
		demi = convert(expression, src, "/100");
		if (demi !== "")
		{
			expression = expression.split(src).join(demi);
		}

		math.eval(expression);
		
	}
	catch(err)
	{
		console.log(err);
		var errorHandle = new errorCatcher();
		if ((errorHandle.catchError(err.stack, "SyntaxError") === true))
		{
			txtFieldString.value = "Syntax error";
			expression = "";
		}
		
	}

	finally
	{
		console.log(expression);
		if (expression!=="")
			{				
				if (expression.includes("sin") || expression.includes("cos"))
					txtFieldString.value = math.round(cal.compute(expression), 2);
				else
					txtFieldString.value = cal.compute(expression);
			}

		isCalculated = true;
	}
}

function calculate (expression)
{
	expression = calFactorial(expression);
	switch(base) {
		case 2:
			calBin(expression);
			break;
		case 8:
			calOct(expression);
			break;
		case 10:
			calDec(expression);
			break;
		case 16:			
			calHex(expression);
			break;
	}	
}

function calFactorial(expression) {
	while(expression.indexOf("!") != -1) {
		var j = expression.indexOf("!");
		var i;
		for(i = j; i > 0; i--)
			if(isOperant(expression[i])) {
				i++;
				break;
			}
			var number = expression.substring(i, j);
			expression = expression.substring(0, i) + "factorial(" + number + ")" + expression.substring(j+1, expression.length);
	}
	return expression;
}



