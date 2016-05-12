# Seminar - Jasmine#


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
 + *Test case*: dùng để chỉ một trường hợp hoạt động của function.
 + *Setup*: dùng để cài đặt các biến, khai báo dữ liệu trước khi chạy các test case.
 + *Teardown*: dùng để giải phóng bộ nhớ sau khi các test case đã được thực hiện xong.
 + *Assert*: câu lệnh dùng để kiểm tra tính đúng đắn của hàm.
 + *Mock*: Giả sử, trong chương trình, có 2 module A & B. Ta cần module A để test module B, nhưng module A
 chưa được xây dựng hoàn chỉnh. Mock chính là kỹ thuật giúp chúng ta giả lập module A, đủ để test module B, không cần phải đợi module A hoàn chỉnh.


## 2. Jasmine 
- Là một framework dùng để thực hiện kiểm thử đơn vị trên những đoạn code JavaScript.
- Được xây dựng theo mô hình BDD.
- Các khái niệm:
 + *Spec Suite*: một bộ kịch bản test, bao gồm nhiều hàm testq. Jasmine sử dụng hàm describe() để định nghĩa 1 Spec Suite. Trong 1 Spec Suite, có thể có chứa những Spec Suite khác.
 + *Spec*: Trong Jasmine, một hàm kiểm thử được gọi là Spec. Spec nằm trong Spec Suite. Để định nghĩa 1 Spec, Jasmine sử dụng hàm it().
 + *Expectation*: Dùng để chỉ kết quả mong đợi đối với một hàm kiểm thử. Trong Jasmine, hàm expect() dùng để mô tả kết quả mong đợi này.
 
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
