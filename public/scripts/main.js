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
	switch(base) {
		case 2:
			break;
		case 10:
			calDec(expression);
			break;
		case 16:			
			calHex(expression)
			break;
	}
}

var compareNumber = {


  toBeGreaterThanOrEqual: function() {

    return {


      compare: function(firstNumber, secondNumber) 
      {
        var result = {};

        if (typeof(firstNumber) !== typeof (secondNumber))
        	result.message = firstNumber + " and  " + secondNumber + " do not have the same data type";
        else if ((typeof(firstNumber) !== "number"))
        	result.message = firstNumber + " and " + secondNumber + " are not number";

        result.pass = ((typeof(firstNumber) === "number") && (typeof (secondNumber) === "number") && (firstNumber >= secondNumber));

        return result;
      }
    };
  }
};


describe ("test custom matcher", function()
	{
		describe ("compare number: toBeGreaterThanOrEqual", function ()
		{
			beforeEach(function()
			{
	    		jasmine.addMatchers(compareNumber);
	  		});

			it("2 > -2: pass", function()
			{
				expect(2).toBeGreaterThanOrEqual(-2);
			});

			it("2 > -2: do not have the same data type", function()
			{
				expect("2").not.toBeGreaterThanOrEqual(-2);
			});

			it("2 > -2: are not number", function()
			{
				expect("2").not.toBeGreaterThanOrEqual("-2");
			});
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
			it("999999999999999 + 0.1 = stack overflow", function(){
				var result = cal.compute("999999999999999 + 1");
				expect(result).toEqual("stack overflow");

			});

			it("-999999999999999 - 0.1 = stack overflow", function(){
				var result = cal.compute("-999999999999999 - 0.1");
				expect(result).toEqual("stack overflow");

			});

		});

		describe("Mock: các trường hợp math error", function()
		{
			it("8/0 = Infinity", function(){
				spyOn(cal, 'compute').and.throwError("lỗi chia cho 0");
				var result = cal.compute("8/0");
				expect(result).toEqual(Infinity);

				expect(result).toThrow();

			});

			it("sqrt(-4) = Infinity", function(){
				spyOn(cal, 'compute').and.throwError("lỗi lấy căn bậc 2 của số âm");
				var result = cal.compute("sqrt(-4)");
				expect(result).toEqual(Infinity);

				expect(result).toThrow();

			});

			it("ln(0) = Infinity", function(){
				spyOn(cal, 'compute').and.throwError("lỗi lấy ln(0)");
				var result = cal.compute("log(0)");
				expect(result).toEqual(Infinity);

				expect(result).toThrow();

			});

			it("ln(-2) = Infinity", function(){
				spyOn(cal, 'compute').and.throwError("lỗi lấy ln của số âm");
				var result = cal.compute("log(-2)");
				expect(result).toEqual(Infinity);

				expect(result).toThrow();

			});

		});


		
	});

	describe ("Mock: biểu thức không hợp lệ", function ()
	{
		var cal = new Calculator();
	
		it("() 7*9=-*", function(){
			spyOn(cal, 'compute').and.throwError("Lỗi cú pháp");
			var result = cal.compute("() 7*9=-*")
			expect(result).toThrow();

		});

		it("(5+3 = error", function(){
			spyOn(cal, 'compute').and.throwError("Lỗi cú pháp");
			var result = cal.compute("(5+3");
			expect(result).toThrow();

		});
		
		it("5+3) = error", function(){
			spyOn(cal, 'compute').and.throwError("Lỗi cú pháp");
			var result = cal.compute("5+3)");
			expect(result).toThrow();

		});
		
	});

	describe ("Mock: tính chuyển đổi cơ số", function ()
	{
		var cal = new Calculator();

		it("convertHEX2DEC", function(){
			var cal = new Calculator();
			spyOn(cal, 'convertHEX2DEC').and.callFake(function(){return 15}); //tạo spy
			var result = cal.convertHEX2DEC("E", 15);
			expect(result).toBe(15);

		});
	});

	describe("Tính giá trị hằng số", function()
	{

			it("find pi", function()		
			{
				var cal = new Calculator();
				spyOn(cal, 'compute').and.returnValue(3.14); //tạo spy
				var result = cal.compute("pi");
				expect(result).toBe(3.14);
			});	

		
	});

});



