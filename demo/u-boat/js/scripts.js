$(document).ready(function(){
    GetCount();
    $('.single-item').slick();
    /*---------------------------------------*/
    $("a.scroll").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
    /*---------------------------------------*/
    $('#features-clock #slider .min-slide .img-min').click(function(){
        $('#features-clock #slider .min-slide .img-min').removeClass('active');
        $(this).addClass('img-min active');
        var urlbig = $(this).attr('id');
        $('#features-clock #slider .big-slide .img-big.active img').attr('src','img/'+urlbig+'.jpg');
        
    });
});
var today = new Date(),
    tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);
function GetCount() {
    dateNow = new Date();
    amount = tomorrow.getTime() - dateNow.getTime();
    delete dateNow;
    if (amount < 0) {
        $('#timer .hours').html('00');
        $('#timer .mins').html('00');
        $('#timer .secs').html('00');
    } else {
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        amount = Math.floor(amount / 1000);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);
        if(hours < 10) hours = '0'+hours;
        if(mins < 10) mins = '0'+mins;
        if(secs < 10) secs = '0'+secs;

        $('#timer .hours').html(hours);
        $('#timer .mins').html(mins);
        $('#timer .secs').html(secs);
        setTimeout("GetCount()", 1000);
    }
}