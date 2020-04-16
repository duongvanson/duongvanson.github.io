---
title: "Tìm hiểu về Markdown"
description: "Cùng Sơn Dương B&D tìm hiểu về Markdown"
---

>Sự chia sẻ và tình yêu thương là điều quý giá nhất trên đời.

[__Home__][home] | [__Blog__][blog] | [__Diary__][diary] | [__About__][about]


[comment]: (Begin)
# Blog - Tìm hiểu về Markdown

>_Phát hành: 16/04/2020, bởi Sơn Dương_

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v6.0"></script>
<div class="fb-like" data-href="https://duongvanson.github.io/blog/tim-hieu-ve-markdown/index" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>

## Giới thiệu

![Logo Markdown](./markdown-logo.png "Logo Markdown")

>Markdown là một ngôn ngữ đánh dấu với cú pháp văn bản thô, 
>được thiết kế để có thể dễ dàng chuyển thành HTML và nhiều định dạng khác 
sử dụng một công cụ cùng tên. Nó thường được dùng để tạo các tập tin readme, 
viết tin nhắn trên các diễn đàn, và tạo văn bản có định dạng bằng một trình biên tập văn bản thô. - _Theo wikipedia_

## Nội dung

1. [Lịch sử](#lịch-sử)
2. [Cú pháp](#cú-pháp)
    - [Văn bản](#văn-bản)
    - [Tiêu đề](#tiêu-đề)
    - [Kiểu chữ](#kiểu-chữ)
    - [Inline-code và block code](#inline-code-và-block-code)
    - [Link](#link)
    - [Image](#image)
    - [Trích dẫn (Blockquotes)](#trích-dẫn-blockquotes)
    - [Gạch dòng](#gạch-dòng)
    - [Danh sách](#danh-sách)
    - [Bảng](#bảng)
3. [Công cụ soạn thảo](#công-cụ-soạn-thảo)
4. [Tài liệu tham khảo](#tài-liệu-tham-khảo)
5. [Kết luận](#kết-luận)

### Lịch sử

>Năm 2004, cùng với sự giúp đỡ của Aaron Swartz, John Gruber đã tạo ra ngôn ngữ Markdown với mục tiêu tạo ra một định dạng văn bản thô "dễ viết, dễ đọc, 
>dễ dàng chuyển thành XHTML (hoặc HTML). - _Theo wikipedia_

### Cú pháp

Nếu bạn đã biết qua về HTML, việc sử dụng Markdown sẽ trở nên vô cùng đơn giản, 
nếu bạn chưa biết chút gì về HTML cũng không sao, bài viết này mình sẽ cố gắng giúp bạn hiểu hơn về nó. ^_^  
Bạn hoàn toàn có thể chèn mã HTML vào trong tài liệu Markdown nhé!
#### Văn bản
Văn bản thì các bạn cứ gõ như bình thường thôi. ^_^  
_Ví dụ:_`Chào mừng bạn đến với Sơn Dương B&D`  
Để xuống dòng thì các bạn có thể gõ 2 dấu cách rồi xuống dòng hoặc sử dụng thẻ `<br/>`ở nơi bạn muốn xuống dòng. Còn nếu muốn xuống đoạn thì gõ `enter` 2 lần nhé.

_Ví dụ:_
```markdown
Sơn  
Dương

B&D<br/>Xuống dòng rồi nè
```
_Kết quả_

Sơn  
Dương

B&D<br/>Xuống dòng rồi nè
#### Tiêu đề

Tương Tự như HTML Markdown sử dụng ký hiệu `#` để phân biệt giữ các tiêu đề.  
Từ `#` => `######` tương ứng với `h1` => `h6` trong HTML. Riêng đối với Tiêu đề 1 và 
Tiêu đề 2 bạn có 2 cách sử dụng, đó là sử dụng dấu `=` cho Tiêu đề 1 và `-` cho Tiêu đề 2.

_Ví dụ:_

```markdown
# Tiêu đề 1
## Tiêu đề 2
### Tiêu đề 3
#### Tiêu đề 4
##### Tiêu đề 5
###### Tiêu đề 6

Đây cũng là tiêu đề 1
=====================

Đây cũng là tiêu đề 2
---------------------

```
_Kết quả ví dụ:_ 

# Tiêu đề 1
## Tiêu đề 2
### Tiêu đề 3
#### Tiêu đề 4
##### Tiêu đề 5
###### Tiêu đề 6

Đây cũng là tiêu đề 1
=====================

Đây cũng là tiêu đề 2
---------------------

#### Kiểu chữ

Để tạo chữ _nghiêng_ chúng ta có thể sử dụng `_nội dung_` hoặc `*nội dung*`.  
Để tạo chữ __đậm__ chúng ta sử dụng `__2 đấu gạch dưới__` hoặc `**2 dấu sao**`.  
Chúng ta hoàn toàn có thể kết hợp chúng lại với nhau nhé! ^_^

#### Inline-code và block code

Để viết `inline code` (trên cùng dòng) chúng ta sử dụng như sau:  
```markdown
    `inline code`
```
Để viết một đoạn code chúng ta để trong cặp ``` hoặc sử dụng `Tab`, nhưng mình thích dùng cách đầu tiên hơn. ^^  
_Ví dụ:_

```markdown
    ```cpp
    // Code by Son Duong
    #include <iostream>
    using namespace std;
    int main(){
	    cout << "Xin chao ban";
	    return 0;
    }
    ```
```

_hoặc:_

        // Code by Son Duong
        #include <iostream>
        using namespace std;
        int main(){
	
	    cout << "Xin chao ban";
	
	    return 0;
        }

_Kết quả là:_

```cpp
// Code by Son Duong
#include <iostream>
using namespace std;
int main(){
	
	cout << "Xin chao ban";
	
	return 0;
}
```
#### Link

Chúng ta sử dụng cú pháp: `[Tên hiển thị](URL "Mô tả nếu có")`  
_Ví dụ:_  
`[Sơn Dương B&D](https://duongvanson.github.io "Chúc bạn mạnh khỏe!")`  
_Kết quả:_ [Sơn Dương B&D](https://duongvanson.github.io "Chúc bạn mạnh khỏe!")

#### Image

Để chèn hình ảnh chúng ta sử dụng cú pháp gần giống với Link, chỉ khác là có dấu `!` ở đầu.  
Cú pháp: `![Tên hiển thị nếu lỗi](URLImage "Mô tả nếu có")`  
_Ví dụ:_  
`![Markdown](https://duongvanson.github.io/assets/images/blog.png "Đây là ảnh ^^")`  
_Kết quả:_

![Markdown](https://duongvanson.github.io/assets/images/blog.png "Đây là ảnh ^^")

#### Trích dẫn (Blockquotes)

Để trích dẫn ta sử dụng `>Nội dung cần trích dẫn`  
_Ví dụ:_
>Sự chia sẻ và tình yêu thương là điều quý giá nhất trên đời.

#### Gạch dòng

Giống với thẻ `hr` trong HTML để tạo một dòng kẻ trong Markdown chúng ta sử dụng `***`.  
_Ví dụ:_
```markdown
***
Trên có 1 dòng kẻ
```
_Kết quả:_  

***
Trên có 1 dòng kẻ

#### Danh sách
Có 2 loại danh sách trong Markdown: Bullet list và Numbered list.  
__Bullet list (Danh sách gạch dòng)__  
_Ví dụ:_

```markdown
* Line 1
  * Line 1.1
    * Line 1.2
* Line 2
* Line 3
```

_hoặc:_
```markdown
- Line 1
  - Line 1.1
    - Line 1.2
- Line 2
- Line 3
```
_Kết quả:_

* Line 1
  * Line 1.1
    * Line 1.2
* Line 2
* Line 3

__Numbered list (Danh sách đánh số thứ tự)__  
_Ví dụ:_
```markdown
1. Line 1
2. Line 2
3. Line 3
```
_Kết quả:_
1. Line 1
2. Line 2
3. Line 3

#### Bảng

Để tạo bảng chúng ta sử `-` và `|`, đối với phần tiêu đề chúng ta cần thêm `-` phía dưới, còn các dòng tiếp theo chúng ta chỉ cần phân cách nội dung bằng `|` ,  các bạn theo dõi ví dụ nhé.  
_Ví dụ:_

```
Họ tên | Năm sinh | Giới tính
------ | -------- | ---------
Sơn Dương | 1998 | Nam
Huyền Anh | 1999 | Nữ
Long Anh | 2000 | Nam
```

_Kết quả:_

Họ tên | Năm sinh | Giới tính
------ | -------- | ---------
Sơn Dương | 1998 | Nam
Huyền Anh | 1999 | Nữ
Long Anh | 2000 | Nam

### Công cụ soạn thảo

Để viết Markdown các bạn có thể sử dụng bất kỳ trình soạn thảo nào với điều kiện lưu file `.md` nhé.  
Dưới đây là một số trình soạn thảo mọi người khuyên dùng:  

- [StackEdit.io](https://stackedit.io/) Soạn thảo trực tuyến
- [Dillinger.io](https://dillinger.io/) Soạn thảo trực tuyến

Ngoài ra, các bạn có thể tìm thêm một số plugin của các Editor mà các bạn đang sử dụng.  
Hiện tại, mình đang sử dụng một `Tools` của Visual Studio cho việc viết Markdown, các bạn có thể tham khảo.  
Em nó đây: [Markdown Editor](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor)

### Tài liệu tham khảo

- [https://vi.wikipedia.org/wiki/Markdown](https://vi.wikipedia.org/wiki/Markdown)
- [https://quantrimang.com/trinh-chinh-sua-va-chuyen-doi-markdown-truc-tuyen-mien-phi-tot-nhat-158779#mcetoc_1corsud7g1](https://quantrimang.com/trinh-chinh-sua-va-chuyen-doi-markdown-truc-tuyen-mien-phi-tot-nhat-158779#mcetoc_1corsud7g1)

### Kết luận
Ok, vậy là mình đã cùng các bạn đi tìm hiểu Markdown qua bài viết này. Các bạn đã hiểu và thích thú với Markdown chưa?  
Nếu bạn đã đọc tới tận đây, mình rất cảm ơn bạn đã quan tâm bài viết của mình. `<3 you 3000`  
Bài viết có thể có sai xót và chưa hoàn chỉnh, nếu có bất kỳ thắc mắc hay góp ý cho bài viết, bạn vui lòng comment xuống bên dưới nha.  
Cảm ơn bạn, chúc bạn sức khỏe và thành công! ^_^

[comment]: (End)

[__Back to Blog__](https://duongvanson.github.io/blog "Trở lại Blog???")

> Follow me: [Facebook][fb] , [Instagram][ins] , [Youtube][yt]

## Bình luận

<div class="fb-comments" data-href="https://duongvanson.github.io/blog/tim-hieu-ve-markdown/index" data-width="500" data-numposts="10"></div>

###### __&copy; duongsondev__

[home]: https://duongvanson.github.io "Home"
[blog]: https://duongvanson.github.io/blog "Blog"
[diary]: https://duongvanson.github.io/diary "Diary"
[about]: https://duongvanson.github.io/about "About"
[fb]: https://www.facebook.com/duongson3198 "Facebook"
[ins]: https://www.instagram.com/duongson98/ "Instagram"
[yt]: https://www.youtube.com/channel/UCu382PQhF-gds6lzmYQgYPQ "Youtube"