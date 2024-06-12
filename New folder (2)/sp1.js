function changeImage(src) {
    document.getElementById('main-image').src = src;
}

function selectColor(color, imageUrl) {
    console.log('Selected color:', color);
    changeImage(imageUrl);

    // Xóa lớp 'selected-color' từ tất cả các ô màu trước khi thêm lớp cho màu được chọn
    var colorOptions = document.getElementsByClassName('color-option');
    for (var i = 0; i < colorOptions.length; i++) {
        colorOptions[i].classList.remove('selected-color');
    }

    // Thêm lớp 'selected-color' cho ô màu được chọn
    var selectedColor = document.querySelector('div[onclick*="' + color + '"]');
    selectedColor.classList.add('selected-color');
}

function selectSize(size) {
    // Xóa lớp 'selected-size' từ tất cả các nút kích thước trước khi thêm lớp cho kích thước được chọn
    var sizeButtons = document.getElementsByClassName('size-button');
    for (var i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].classList.remove('selected-size');
    }

    // Thêm lớp 'selected-size' cho nút kích thước được chọn
    var selectedButton = document.querySelector('button[onclick*="' + size + '"]');
    selectedButton.classList.add('selected-size');

    // Gọi các hàm khác cần thiết ở đây (ví dụ: cập nhật giá hoặc màu sắc dựa trên size được chọn)
    // ...
}
// Auto-slide images
var currentIndex = 0;
var images = [
   "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/450195/item/vngoods_01_450195.jpg?width=750" ,
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450195/item/goods_06_450195.jpg?width=750" ,
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450195/item/goods_08_450195.jpg?width=750" ,
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450195/item/goods_09_450195.jpg?width=750" ,
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450195/item/goods_19_450195.jpg?width=750" ,
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450195/item/goods_68_450195.jpg?width=750" 
    
];

function changeImageAutomatically() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('main-image').src = images[currentIndex];
}

var slideInterval = setInterval(changeImageAutomatically, 3000); // Change image every 3 seconds

function disableAutoSlide() {
    clearInterval(slideInterval); // Stop auto-sliding
}
