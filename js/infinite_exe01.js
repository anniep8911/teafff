$(function(){
/*전처리 작업*/
$('.imgGroup>li:last').prependTo('.imgGroup');
$('.imgGroup').css('margin-left','-25%');

    $('.left').click(function(){
        $('.imgGroup').stop().animate({
            marginLeft : '0%'
        },500,'easeOutElastic',function(){
            $('.imgGroup').css('margin-left','-25%');
            $('.imgGroup>li:last').prependTo('.imgGroup');
        })
    });

    $('.right').click(function(){
        $('.imgGroup').stop().animate({
            marginLeft : '-50%'
        }, 500,'easeOutBounce', function(){
            $('.imgGroup').css('margin-left','-25%');
            $('.imgGroup>li:first').appendTo('.imgGroup');
        });
    });
});