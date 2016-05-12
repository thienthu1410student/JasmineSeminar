var isCalculated = false;
var minNumber = -999999999999999;
var maxNumber = 999999999999999;


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
}

function calculate (expression)
{

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
					txtFieldString.value = txtFieldString.value + " = " + math.round(cal.compute(expression), 2);
				else
					txtFieldString.value = txtFieldString.value + " = " + cal.compute(expression);

			}


		isCalculated = true;
	}
}

describe("Bắt lỗi", function()
{
	var errorHandle = new errorCatcher();
	it("SyntaxError", function(){
		expect(true).toEqual(errorHandle.catchError("SyntaxErrorabc", "SyntaxError"))

	});
});

describe("Tính toán", function()
{
	describe ("Biểu thức hợp lệ", function ()
	{
		var cal = new Calculator();
		it("-2 = -2", function(){
			var result = cal.compute("-2");
			expect(result).toEqual(-2);

		});

		it("--2 = 2", function(){
			var result = cal.compute("--2");
			expect(result).toEqual(2);

		});

		it("5+3 = 8", function(){
			var result = cal.compute("5+3");
			expect(result).toEqual(8);

		});

		
		it("(5+3) = 8", function(){
			var result = cal.compute("(5+3)");
			expect(result).toEqual(8);

		});

		describe("Tính lũy thừa", function()
		{
				it("2^2 = 4", function(){
				var result = cal.compute("2^2");
				expect(result).toEqual(4);

			});


				it("-2^2 = 4", function(){
				var result = cal.compute("-2^2");
				expect(result).toEqual(-4);

			});


		});

		describe("Kiểm tra giá trị biên", function()
		{
			it("999999999999999 + 1 = stack overflow", function(){
				var result = cal.compute("999999999999999 + 1");
				expect(result).toEqual("stack overflow");

			});

			it("-999999999999999 - 1 = stack overflow", function(){
				var result = cal.compute("999999999999999 + 1");
				expect(result).toEqual("stack overflow");

			});

			it("999999999999999 + 1 = 10 nghìn", function(){
				var result = cal.compute("999999999999999 + 1");
				expect(result).toEqual(1000000000000000);

			});

			it("-999999999999999 - 1 =  - (10 nghìn)", function(){
				var result = cal.compute("-999999999999999 - 1");
				expect(result).toEqual(-1000000000000000);

			});
		});

		describe("Các trường hợp math error", function()
		{
			it("8/0 = Infinity", function(){
				var result = cal.compute("8/0");
				expect(result).toEqual(Infinity);

			});

			it("sqrt(-4) = Infinity", function(){
				var result = cal.compute("sqrt(-4)");
				expect(result).toEqual(Infinity);

			});

			it("ln(0) = Infinity", function(){
				var result = cal.compute("log(0)");
				expect(result).toEqual(Infinity);

			});

			it("ln(-2) = Infinity", function(){
				var result = cal.compute("log(-2)");
				expect(result).toEqual(Infinity);

			});

			it("log(x: -2, base: 10) = Infinity", function(){
				var result = cal.compute("log(-2, 10)");
				expect(result).toEqual(Infinity);

			});
		});


		
	});

	describe ("Biểu thức không hợp lệ", function ()
	{
		var cal = new Calculator();
	
		it("() 7*9=-*", function(){
			var result = cal.compute("() 7*9=-*")
			expect(result).toEqual("error");

		});

		it("(5+3 = error", function(){
			var result = cal.compute("(5+3")
			expect(result).toEqual("error");

		});
		
		it("5+3) = error", function(){
			var result = cal.compute("5+3)")
			expect(result).toEqual("error");

		});

		it("5+3) = 8", function(){
			var result = cal.compute("5+3)")
			expect(result).toEqual(8);

		});

		it("(5+3 = 8", function(){
			var result = cal.compute("(5+3")
			expect(result).toEqual(8);

		});

		
	});
});