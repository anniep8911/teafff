$(function(){
    var b = 0;
    $('.imgView>.btns>.right').click(function(){
        if(b >= 4){
            b = 4;
        }else{b++;};
        $('.imgView>.imgGroup').css('margin-left',b * -100 + '%');
    });

    $('.imgView>.btns>.left').click(function(){
        if(b <= 0){
            b = 0;
        }else{b--;};
        $('.imgView>.imgGroup').css('margin-left',b * -100 + '%');
    });

    var d =  $('.imgView>.imgGroup');

    $('.thumbGroup>li').click(function(){
        var i =  $(this).index();
        b = i;
        d.css('margin-left',i * -100 +'%');
    });

});