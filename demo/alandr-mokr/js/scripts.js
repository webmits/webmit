$(document).ready(function() {
		var siteurl = 'http://demo.webmit.ru/alandr_mokr/'; //указывать со слешом на конце http://site.ru - неправильно http://site.ru/ - правильно
$('.bg_popup,.close,.bg_popup_order').click(function(){
	$('.popup, #bg,.popup_order,.popup .popup_download, .popup .bg_popup_object').fadeOut(100);
});

$('.download').click(function(){
	$('.popup, #bg,.popup_order,#popup_download').fadeIn(100);	
});




/*Валидация и отправка формы "обратный звонок"*/

$("#btn").click(function(){
	var name = $("#name");
	var phone = $("#phone");
	var email = $("#email");	
	var area = $("#area");
	if(phone.val()==''){
		alert("Введите телефон");
		send_phone = 0;
	}else{
		
		send_phone = 1;
	}	
	
	if(send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send1.php",
			data:"phone="+phone.val()+"&email="+email.val()+"&name="+name.val()+"&area="+area.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, .popup .popup_download, .popup .bg_popup_object").hide();
					document.location.href = siteurl+'thank.html';								
				}else{
					$(".popup, .popup .popup_download, .popup .bg_popup_object").hide();
					alert('Ошибка при отправке данных!');
				}}
		
	});
	}
});	

$("#btn2").click(function(){
	var name = $("#name2");
	var phone = $("#phone2");
	var email = $("#email2");	
	var area = $("#area2");
	if(phone.val()==''){
		alert("Введите телефон");
		send_phone = 0;
	}else{
		
		send_phone = 1;
	}	
	
	if(send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send2.php",
			data:"phone="+phone.val()+"&email="+email.val()+"&name="+name.val()+"&area="+area.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, .popup .popup_download, .popup .bg_popup_object").hide();
					document.location.href = siteurl+'thank.html';								
				}else{
					$(".popup, .popup .popup_download, .popup .bg_popup_object").hide();
					alert('Ошибка при отправке данных!');
				}}
		
	});
	}
});	

$("#btn3").click(function(){
	var name = $("#name3");
	var phone = $("#phone3");
	var email = $("#email3");	
	if(phone.val()==''){
		alert("Введите телефон");
		send_phone = 0;
	}else{
		
		send_phone = 1;
	}	
	
	if(send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send3.php",
			data:"phone="+phone.val()+"&email="+email.val()+"&name="+name.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, .popup .popup_download, .popup .bg_popup_object").hide();
					document.location.href = siteurl+'thank.html';								
				}else{
					$(".popup, .popup .popup_download, .popup .bg_popup_object").hide();
					alert('Ошибка при отправке данных!');
				}}
		
	});
	}
});	





$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});


	$("#block2 #true_object .bg").click(function(){
		var num = $(this).attr('num');
	$(".popup ,.popup .bg_popup_object,.popup .bg_popup_gost").fadeOut(300);
	$(".popup , .popup #bg_popup_object-"+num+"").fadeIn(300);
	});



	$(".valid li").click(function(){
	var num = $(this).attr('num');
	$(".popup, .popup .bg_popup_gost, .popup .bg_popup_object").fadeOut(300);
	$(".popup, .popup #bg_popup_gost-"+num+"").fadeIn(300);

		$("#btn-gost"+num+"").click(function(){
	var name = $("#email-gost"+num+"");
	var phone = $("#phone-gost"+num+"");	
	if(phone.val()!= ''){		
		send_phone = 1;
	}else{
		send_phone = 0;
		alert("Введите телефон");
	}
	
	if(send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send"+num+".php",
			data:"name="+name.val()+"&phone="+phone.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, .popup .bg_popup_gost, .popup .bg_popup_object").hide();
					document.location.href = siteurl+'thank.html';								
				}else{
					$(".popup, .popup .bg_popup_gost, .popup .bg_popup_object").hide();
					alert('Ошибка при отправке данных!');
				}}
		
			});
			}
		});	
	});



$(document).ready(function() {
    CustomHandler();
});
var CustomHandler = function() {
	
    $(function() {
        var e = {
            text: -900
        };
        var t = {
            text: 0
        };
        var i = {
            text: 900
        };
        var a = false;
        $.fn.animateSlideItem = function(e, t, i) {
            this.delay(e).animate({
                left: t
            }, i);
        };
        $.fn.cssSlideItem = function(e) {
            return this.css({
                left: e
            });
        };
        $.fn.animateSlideItem2 = function(e, t, i) {
            this.delay(e).animate({
                right: t
            }, i);
        };
        $.fn.cssSlideItem2 = function(e) {
            return this.css({
                right: e
            });
        };
        var n = $(".wr19 .gallery .items");
        var l = $(".wr19 .gallery-day").children();
        n.carouFredSel({
            auto: false,
            width: 909,
            items: 1,
            scroll: {
                items: 1,
                duration: 0,
                timeoutDuration: 3e3
            },
            prev: {
                button: ".wr19 .icon-arrow-left-white",
                conditions: function() {
                    return !a;
                },
                onBefore: function(t) {
                    var i = t.items.visible.eq(0).data("day");
                    l.text("" + i);
                    a = true;
                    $(this).delay(400);
                    t.items.old.find(".gallery-title").removeAttr("style");
                    t.items.old.find(".gallery-text").removeAttr("style");
                    t.items.old.find(".gallery-title").animateSlideItem2(100, e.text);
                    t.items.old.find(".gallery-text").animateSlideItem2(200, e.text);
                },
                onAfter: function(e) {
                    e.items.old.find(".gallery-title").cssSlideItem2(t.text);
                    e.items.old.find(".gallery-text").cssSlideItem2(t.text);
                    e.items.visible.find(".gallery-title").removeAttr("style");
                    e.items.visible.find(".gallery-text").removeAttr("style");
                    e.items.visible.find(".gallery-title").cssSlideItem2(i.text).animateSlideItem2(200, t.text, function() {
                        a = false;
                    });
                    e.items.visible.find(".gallery-text").cssSlideItem2(i.text).animateSlideItem2(100, t.text);
                }
            },
            next: {
                button: ".wr19 .icon-arrow-right-white",
                conditions: function() {
                    return !a;
                },
                onBefore: function(t) {
                    var i = t.items.visible.eq(0).data("day");
                    l.text("" + i);
                    a = true;
                    $(this).delay(400);
                    t.items.old.find(".gallery-title").animateSlideItem(100, e.text);
                    t.items.old.find(".gallery-text").animateSlideItem(200, e.text);
                },
                onAfter: function(e) {
                    e.items.old.find(".gallery-title").cssSlideItem(t.text);
                    e.items.old.find(".gallery-text").cssSlideItem(t.text);
                    e.items.visible.find(".gallery-title").cssSlideItem(i.text).animateSlideItem(100, t.text, function() {
                        a = false;
                    });
                    e.items.visible.find(".gallery-text").cssSlideItem(i.text).animateSlideItem(200, t.text);
                }
            },
            pagination: {
                container: ".wr19 .paginator",
                anchorBuilder: false
            },
            swipe: {
                onTouch: true,
                onMouse: true
            }
        });
    });
	
};


});
