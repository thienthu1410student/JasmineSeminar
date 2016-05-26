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

