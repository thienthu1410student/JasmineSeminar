var isCalculated = false;

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
		if (txtFieldString.value != "")
			txtFieldString.value = txtFieldString.value + ")";
		txtFieldString.value = txtFieldString.value  + button.value + "(";
	}

	else 
		{
			isCalculated = false;
			txtFieldString.value = button.value + "(";
		}
}

function clearAll()
{
	txtFieldString.value = "";
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



function calculate (expression)
{

	try
	{
		console.log(expression.charCodeAt(0));
		if (expression.includes(String.fromCharCode(215)))
		{
			expression = expression.split(String.fromCharCode(215)).join("*");
		}

		if (expression.includes(String.fromCharCode(247)))
		{
			expression = expression.split(String.fromCharCode(247)).join("/");		
		}

		if (expression.includes(String.fromCharCode(960)))
		{
			expression = expression.split(String.fromCharCode(960)).join("pi");		
		}

		if (expression.includes(String.fromCharCode(8730)))
		{
			expression = expression.split(String.fromCharCode(8730)).join("sqrt");		
		}

		if (expression.includes("ln"))
		{
			expression = expression.replace(/ln/g, "log");
		}

		if (expression.includes("%"))
		{
			expression = expression.replace(/%/g, "/100");
		}

		if (expression.includes("!"))
		{
			expression = expression.replace(/!/g, "factorial(");
		}

		
		math.eval(expression); // 

		
	}
	catch(err)
	{
		console.log(err);
		if (err.message.includes(") expected")) 
		{
			expression = expression + ")";
		}

		else if ((err.stack.includes("SyntaxError")))
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
					txtFieldString.value = txtFieldString.value + " = " + math.round(math.eval(expression));
				else
					txtFieldString.value = txtFieldString.value + " = " + math.eval(expression);

			}


		isCalculated = true;
	}
}