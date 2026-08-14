---
id: "1"
slug: "huong-dan-tao-van-ban-bang-ai-trong-lark-base"
title: "Hướng Dẫn Tạo Văn Bản Bằng AI Trong Lark Base Cho Doanh Nghiệp"
description: "Bạn muốn tối ưu hóa quy trình làm việc? Bạn muốn tự động hóa việc sáng tạo nội dung? Chức năng tạo văn bản bằng AI trong Lark Base sẽ giúp bạn giải quyết điều đó."
date: "2026-08-14"
category: "Lark"
author: "Cloudino Expert"
image: "/images/backgrounds/deco-1.png"
---

Bạn muốn tối ưu hóa quy trình làm việc? Bạn muốn tự động hóa việc sáng tạo nội dung? Chức năng tạo văn bản bằng AI trong Lark Base sẽ giúp bạn giải quyết điều đó.

Tính năng này giúp bạn tóm tắt dữ liệu nhanh chóng. Bạn cũng có thể viết nội dung tự động trong Lark Workflow. Hãy cùng tìm hiểu chi tiết về công cụ tuyệt vời này.

## Giới Thiệu Tính Năng Tạo Văn Bản Bằng AI Trong Lark Base

Tạo văn bản bằng AI trong Lark Base là một tính năng thông minh. Công cụ này cho phép bạn tạo ra các đoạn văn bản tự động. Dữ liệu đầu vào lấy trực tiếp từ bản ghi của bạn.

Bạn có thể dùng văn bản AI cho các bước tiếp theo. Ví dụ như gửi tin nhắn hoặc cập nhật bản ghi mới.

### Các mô hình AI được hỗ trợ

Lark cung cấp hai lựa chọn mô hình AI linh hoạt:
- **AI tích hợp sẵn của Lark Base**: Dễ sử dụng, thiết lập nhanh chóng.
- **Mô hình OpenAI (GPT)**: Yêu cầu khóa API riêng. Mô hình này phù hợp cho nhiệm vụ phức tạp.

---

## Hạn Ngạch Và Giới Hạn Sử Dụng AI

Lark quy định hạn ngạch sử dụng dựa trên từng gói dịch vụ. Bạn cần nắm rõ để vận hành quy trình mượt mà.

### Gói Starter
- **Giới hạn theo ngày**: 30.000 lần/ngày.
- **Giới hạn theo tháng**: 300.000 lần/tháng.

### Gói Basic, Pro và Enterprise
- **Giới hạn theo ngày**: 200.000 lần/ngày.
- **Giới hạn theo tháng**: 2.000.000 lần/tháng.

> **Lưu ý quan trọng:** Hạn ngạch trên áp dụng cho tính năng AI tích hợp. Các giới hạn này áp dụng chung cho tính năng cập nhật bản ghi bằng AI.

---

## Hướng Dẫn Cấu Hình Tạo Văn Bản Bằng AI Trong Lark Base

Chúng tôi sẽ hướng dẫn bạn cấu hình chi tiết qua từng bước đơn giản dưới đây.

### Bước 1: Tạo mới một Workflow
1. Bạn mở cơ sở dữ liệu Lark Base của mình.
2. Nhấp vào nút **Workflow** ở góc dưới bên trái.
3. Chọn **Start From Scratch** để bắt đầu quy trình mới.

`[Mở Lark Base] -> [Nhấp Workflow] -> [Chọn Start From Scratch]`

### Bước 2: Thêm và cấu hình các nút (Nodes)
1. Chọn điều kiện kích hoạt (**Trigger**) phù hợp với nhu cầu.  
   *Ví dụ: Bạn chọn `When a new record is added`.*
2. Nhấp vào **Then do this** để thêm hành động.
3. Chọn hành động **AI-generated text**.
4. Nếu muốn dùng GPT, hãy chọn **AI-generated text (GPT model)**.

---

## Cách Thiết Lập Câu Lệnh (Prompt) Chuẩn Xác

Câu lệnh quyết định chất lượng văn bản đầu ra. Do đó, bạn cần thiết lập câu lệnh thật chi tiết.

### Tích hợp khóa API OpenAI
1. Nếu dùng mô hình GPT, bạn cần nhập khóa API.
2. Nhấp vào **Switch Model** ở góc dưới bên trái.
3. Chọn mô hình OpenAI mong muốn.
4. Nhập khóa API của bạn vào hệ thống.

### Nhập câu lệnh và tham chiếu dữ liệu
1. Nhập nội dung yêu cầu vào ô **Enter prompt**.
2. Nhấp vào biểu tượng **⊕** để lấy dữ liệu từ bảng.
3. Bạn có thể lấy dữ liệu từ các trường trong bản ghi.
4. Muốn gộp dữ liệu nhiều bản ghi? Hãy thêm nút **Find records** trước nút AI.

> **Lưu ý:** AI không thể tham chiếu tệp đính kèm và mã vạch. Hình ảnh từ máy tính cũng chưa được hỗ trợ.

### Tối ưu hóa câu lệnh tự động (Optimize Prompt)
Lark cung cấp công cụ tối ưu câu lệnh rất tiện lợi:
1. Gõ câu lệnh ban đầu vào ô chứa văn bản.
2. Nhấp vào nút **Optimize** ở góc trên bên phải.
3. AI sẽ tự động sửa câu lệnh cho rõ ràng hơn.
4. Bạn có thể chấp nhận hoặc hủy bỏ câu lệnh mới.

---

## Chạy Thử Và Kiểm Tra Kết Quả AI

Trước khi kích hoạt, bạn nên thử nghiệm tính năng này. Việc kiểm tra giúp tránh các lỗi không mong muốn.

### Cách thực hiện chạy thử
1. Nhấp vào nút **Test Results** ở góc dưới bên trái.
2. Màn hình sẽ chia làm hai phần rõ rệt:

#### Bảng cấu hình (Configurations – Bên trái)
- Hiển thị câu lệnh mà bạn vừa thiết lập.
- Hiển thị phần dữ liệu dùng để thử nghiệm (*Data used for testing*).
- Nhấp **Generate Test Data** để đổi nguồn dữ liệu thử.
- Bạn có thể nhập dữ liệu kiểm tra bằng tay.

#### Bảng xem trước (Preview – Bên phải)
- Hiển thị kết quả do AI khởi tạo.
- Nhấp vào **Re-generate** nếu muốn AI tạo lại văn bản khác.

---

## Sử Dụng Văn Bản AI Cho Các Nút Tiếp Theo

Văn bản AI tạo ra sẽ làm đầu vào cho bước sau. Tính năng này giúp tự động hóa Lark Base toàn diện.

**Ví dụ cập nhật bản ghi tự động:**
1. Thêm nút hành động **Update record** phía sau.
2. Tìm đến ô **Set record content**.
3. Nhấp vào biểu tượng **⊕**.
4. Chọn dữ liệu từ nút **AI-generated text in step 2**.
5. Nhấp **Save and Activate** để hoàn tất.

---

## Xử Lý Các Lỗi Thường Gặp

Khi sử dụng AI trong Lark Workflow, bạn có thể gặp một số lỗi. Hãy tham khảo bảng dưới đây để xử lý nhanh chóng.

| Báo lỗi trên hệ thống | Nguyên nhân gây lỗi | Cách xử lý nhanh |
| :--- | :--- | :--- |
| **The input length exceeds the limit in AI-generate text** | Câu lệnh dài vượt quá 8.192 ký tự UTF-8 | Giảm độ dài câu lệnh input |
| **An error occurred in the prompt in AI-generate text** | Câu lệnh chứa từ ngữ nhạy cảm hoặc vi phạm | Chỉnh sửa lại nội dung câu lệnh |
| **The prompt is empty in AI-generate text** | Ô nhập câu lệnh đang để trống | Kiểm tra và nhập câu lệnh hợp lệ |

---

## Lợi Ích Khi Tích Hợp AI Vào Tự Động Hóa Lark Base

Việc ứng dụng tạo văn bản tự động bằng GPT mang lại lợi ích lớn. Doanh nghiệp sẽ tiết kiệm nhiều thời gian vận hành:

- **Tối ưu thời gian:** AI làm việc thay con người trong vài giây.
- **Giảm thiểu sai sót:** Dữ liệu chuẩn xác, không bị nhầm lẫn.
- **Tăng hiệu suất:** Nhân sự tập trung vào công việc quan trọng hơn.
- **Chăm sóc khách hàng tốt hơn:** Gửi phản hồi tự động cực nhanh.

---

## Kết Luận

Tính năng tạo văn bản bằng AI trong Lark Base cực kỳ mạnh mẽ. Công cụ này giúp doanh nghiệp tối ưu quy trình tự động hóa. Hãy áp dụng ngay hôm nay để nâng cao hiệu suất làm việc.

Nếu gặp khó khăn, hãy liên hệ bộ phận **Lark Support** để được hỗ trợ. Chúc bạn thiết lập quy trình thành công!
