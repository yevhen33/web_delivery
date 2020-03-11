$(document).ready(function(){

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.price-item__content').eq(i).toggleClass('price-item__content_active');
                $('.price-item__list').eq(i).toggleClass('price-item__list_active');
            })
        });
    };

    toggleSlide('.button_mini');
    toggleSlide('.button_back');
    
    $('.reviews-carusel').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/reviews/slayder-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/reviews/slayder-right.png"></button>'   
      });
});
 