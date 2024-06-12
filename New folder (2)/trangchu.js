document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
window.onload = function() {
    var products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        var defaultImg = product.querySelector('.default-img');
        var hoverImg = product.querySelector('.hover-img');

        // Hiển thị kích thước ảnh tương ứng
        hoverImg.innerText = defaultImg.naturalWidth + 'x' + defaultImg.naturalHeight;
    });
};
