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
    
});
 