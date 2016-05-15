# Seminar - Jasmine 2.0.0#


Danh sách sinh viên:

**1312582 - Bùi Phạm Thiên Thư**

**1312595 - Trịnh Xuân Tiến**

**1312596 - Dương Tiễn**

**1312600 - Nguyễn Hoàng Tín**

##
## 1. Unit Test
- Được thực hiện bởi developer.
- Mục đích là để chứng minh tính đúng đắn của các hàm.
- Các hoạt động unit test:
 + Bảo đảm contract.
 + Kiểm tra kết quả truyền dữ liệu.
 + Kiểm tra kết quả tính toán.
 + Bảo đảm lỗi bên ngoài được xử lý một cách chính xác.
- Một số khái niệm cơ bản:
 + *Test case*: Dùng để chỉ một trường hợp hoạt động của function.
 + *Setup*: Dùng để cài đặt các biến, khai báo dữ liệu trước khi chạy các test case.
 + *Teardown*: Dùng để giải phóng bộ nhớ sau khi các test case đã được thực hiện xong.
 + *Assert*: Câu lệnh dùng để kiểm tra tính đúng đắn của hàm.
 + *Mock*: Giả sử, trong chương trình, có 2 module A & B. Ta cần module A để test module B, nhưng module A
 chưa được xây dựng hoàn chỉnh. Mock chính là kỹ thuật giúp chúng ta giả lập module A, đủ để test module B, không cần phải đợi module A hoàn chỉnh.


## 2. Jasmine 
- Là một framework dùng để thực hiện kiểm thử đơn vị trên những đoạn code JavaScript.
- Được xây dựng theo mô hình BDD.
- Các khái niệm:
 + *Spec Suite*: 
  + Một bộ kịch bản test, bao gồm nhiều hàm testq. 
  + Jasmine sử dụng hàm describe() để định nghĩa 1 Spec Suite. Trong 1 Spec Suite, có thể có chứa những Spec Suite khác.
  + Nếu chúng ta không muốn xem kết quả của 1 Spec Suite, ta thay lệnh describe() bằng lệnh xdescribe().
 + *Spec*: 
  + Trong Jasmine, một hàm kiểm thử được gọi là Spec. Spec nằm trong Spec Suite.
  +  Để định nghĩa 1 Spec, Jasmine sử dụng hàm it().
  +  Trong nhiều trường hợ, test case có kết quả trả về chưa được xác định đầy đủ. Lúc này, ta có thể thay lệnh it() bằng câu lệnh xit() hoặc sử dụng thêm câu lệnh pending();
 + *Expectation*:
  + Dùng để chỉ kết quả mong đợi đối với một hàm kiểm thử.
  + Trong Jasmine, hàm expect() dùng để mô tả kết quả mong đợi này.
 + *Hàm Setup và Teardown*:
  + Các hàm Setup: `beforeEach(): được chạy trước khi chạy MỖI test case`; `beforeAll(): được chạy trước khi TẤT CẢ các test case được chạy`.
  + Các hàm Teardown: `afterEach(): được chạy sau khi chạy MỖI test case`; `afterAll(): được chạy sau khi TẤT CẢ các test case được chạy`.
 + *Matcher*: 
  + So sánh kết quả mong đợi với kết quả thực sự của một test case.
  + Cú pháp khẳng định: `expect(expected_value).<matcher_function>`.
  + Cú pháp phủ định:   `expect(expected_value).not.<matcher_function>`.
  + Danh sách các matcher mà jasmine 2.0.0 hỗ trợ:
  		+ toEqual(value): So sánh giá trị expected_value có bằng với giá trị value hay không. Matcher này có thể so sánh 2 biến không cùng địa chỉ.
   	
		----------

			Ví dụ:
			describe("matcher toEqual", function()
			{
				it("khác địa chỉ", function()
					{
						var object1 = new Object();
						var object2 = new Object();
						expect (object1).toEqual(object2);
					});
			
				it("cùng địa chỉ", function()
					{
						var object1 = new Object();
						var object2 = object1;
						expect (object1).toEqual(object2);
					});
			
				it("cùng kiểu dữ liệu, cùng giá trị", function()
					{
						var object1 = new Object();
						var object2 = new Object();
						object1 = 1;
						object2 = 1;
						expect (object1).toEqual(object2);
					});
			
				it("cùng kiểu dữ liệu, khác giá trị", function()
					{
						var object1 = new Object();
						var object2 = new Object();
						object1 = 1;
						object2 = 2;
						expect (object1).not.toEqual(object2);
					});
			
				it("khác kiểu dữ liệu", function()
					{
						var object1 = new Object();
						var object2 = new Object();
						object1 = 1;
						object2 = "1";
						expect (object1).not.toEqual(object2);
					});
			});
				
		----------

 		+ toBe(object): So sánh giá trị expected_value có bằng với giá trị object có cùng là 1 đối tượng hay không.
   	
		----------

			Ví dụ:
			describe("matcher toBe", function()
			{
				it("khác địa chỉ", function()
					{
						var object1 = new Object();
						var object2 = new Object();
						expect (object1).not.toBe(object2);
					});
			
				it("cùng kiểu dữ liệu nguyên", function()
					{
						var object1 = new Object();
						object1 = 1;
						object2 = 1;
						expect (object1).toBe(object2);
					});
			
			
				it("cùng địa chỉ", function()
					{
						var object1 = new Object();
						var object2 = new Object();
						object1 = object2;
						expect (object1).toBe(object2);
					});	
			});
				
		----------

 		+ toBeDefined(): Kiểm tra biến expected_value có được định nghĩa hay chưa.
 		+ toBeUndefined(): Kiểm tra biến expected_value có được định nghĩa hay chưa.
 		+ toBeNull(): Kiểm tra biến (giá trị) expected_value có phải là null hay không.
 		+ toBeFalsy(): Kiểm tra biến (giá trị) expected_value có thuộc dạng "falsy" hay không (null, 0, "", NaN, undefined, false.
 		+ toBeTruthy(): Kiểm tra biến (giá trị) expected_value có thuộc dạng "truthy" hay không (not.toBeFalsy()).
 		+ toBeLessThan(decimal_number): Kiểm tra số expected_value có nhỏ hơn số decimal_number hay không.
 		+ toBeGreaterThan(decimal_number): Kiểm tra số expected_value có lớn hơn số decimal_number hay không.
 		+ toContain(array): Kiểm tra phần tử expected_value có nằm trong mảng array hay không.
 		
		----------

			Ví dụ:
			describe("matcher toContain", function()
			{
				it("simple items", function()
					{
						var object1 = [1,2,3];
						var object2 = 1;
						expect (object1).toContain(object2);
					});
			
				it("flexible items", function()
					{
						var object1 = [{str:"str", int:"int"}, 1];
						var object2 = {str:"str", int:"int"};
						expect (object1).toContain(object2);
					});
			});
				
		----------
		
 		+ toBeCloseTo(decimal_number, position): Kiểm tra số thực expected_value có bằng với số decimal_number ở vị trí position hay không.
 		

		----------
	
			Ví dụ:
			describe("matcher toBeCloseTo", function()
				{
					it("vị trí <= 0", function()
						{
							
							expect (12.34).toBeCloseTo(12.3, 0);
							expect (12.34).toBeCloseTo(12.3, -100);
						});
				
					it("giống nhau", function()
						{
							expect (12.34).toBeCloseTo(12.3, 1);
						});
	
					it("khác nhau", function()
						{
							expect (12.34).not.toBeCloseTo(12.3, 2);
						});
				});

		----------
	
 		+ toThrow(): Kiểm tra hàm expected_value có văng lỗi hay không.
 		+ toThrowError(errorName): Kiểm tra hàm expected_value có văng lỗi errorName hay không.
  * Custom Matcher: Ngoài những matcher do Jasmine cung cấp, chúng ta cũng có thể tạo ra matcher cho riêng mình.
  		
		

		----------

			Ví dụ:
			var compareNumber = 
			{
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
					
		----------

 		
* *Spy&Mock*:  	
 
 
## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
