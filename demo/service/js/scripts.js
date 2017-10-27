$(document).ready(function() {
    $('.responsive').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true

    });

    $("#slider").slider({
        value: 1,
        min: 0,
        max: 1,
        step: 1
    });
    $("#amount").val("$" + $("#slider").slider("value"));

    $("#slider-range").slider({
        range: "min",
        min: 0,
        max: 20,
        value: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value + " шт.").change();
        }
    });
    $("#amount").val($("#slider-range").slider("value") + " шт.").change();
	
	$("#slider-range2").slider({
        range: "min",
        min: 0,
        max: 10,
        value: 2,
        slide: function(event, ui) {
            $("#amount2").val(ui.value + " шт.").change();
        }
    });
    $("#amount2").val($("#slider-range2").slider("value") + " шт.").change();

	initialize();
	
	function initialize() {
		buzz.defaults.formats = ['ogg', 'mp3'];
		buzz.defaults.preload = true;

		if (buzz.isSupported()) {
			var noticeSound = new buzz.sound("sound/notice");
		}

		$.jGrowl.defaults.position = 'top-right';
		$.jGrowl.defaults.closer = false;
		$.jGrowl.defaults.beforeOpen = function(e, m, o) {
			if (noticeSound)
				noticeSound.play();
		};
	}


	$('#amount').on('change', function() {
		calc();
		//$( "#slider" ).slider({value: parseInt($("#amount").val())});
		if(parseInt($("#amount").val()) > 19)
			$.jGrowl("Внимание, такое количество рассчитывается индивидуально, обратитесь к менеджеру для расчёта цены и согласования!", { life: 10000 });
	});	
	
	$('#amount2').on('change', function() {
		calc();
		//$( "#slider" ).slider({value: parseInt($("#amount").val())});
		if(parseInt($("#amount2").val()) > 9)
			$.jGrowl("Внимание, такое количество рассчитывается индивидуально, обратитесь к менеджеру для расчёта цены и согласования!", { life: 10000 });
	});	

	function calc() {
		$("#price").text(String((parseInt($("#amount").val())*parseInt($("#pc").val()) + parseInt($("#amount2").val())*parseInt($("#server").val()))*0.5).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + ' руб.') 
	} 	

    function setHeiHeight() {
        $('#block2').css('margin-top', $('#header').height() + 'px');

    }
    setHeiHeight(); 
    $(window).resize(setHeiHeight);
			
	var s = $("#nav-anchor"),
		a = $("#top"),
		u = $("a", a),
		l = 0,
		c = 0,
		i = $("body");

	function t() {
		u.removeClass("noTransition")
	}

	function e() {
		a.css({
			position: "",
			display: "block"
		})
	}

	s.waypoint({
		handler: function(n) {
			clearTimeout(l),
				clearTimeout(c),
				u.addClass("noTransition"),
				"down" == n ? (i.addClass("fixed-nav"),
					a.finish().css({
						"margin-top": -90
					}).animate({
						"margin-top": 0
					}, 250, function() {
						l = setTimeout(t, 500)
					})) : a.finish().animate({
					"margin-top": -90
				}, 100, function() {
					i.removeClass("fixed-nav"),
						a.css({
							"margin-top": 0,
							display: "none",
							position: "fixed"
						}),
						l = setTimeout(t, 500),
						c = setTimeout(e, 10)
				})
		},
		offset: -250
	})
		
	$(window).scroll(function() {	
		if ($(this).scrollTop() > 200) {
			$('#header #top #logo img').attr('src', 'img/logo_fix.png');
		} else {
			$('#header #top #logo img').attr('src', 'img/logo_fix.png');	
		}	
		
    });

    

    var speed = 1000,
        originalHeight = 138,
        hoverHeight = 276;

    $('.arrow_next').toggle(function() {
        $('#uslugi').stop().animate({
            height: hoverHeight
        }, speed);
        $('.arrow_next').addClass('arrow_back');
    }, function() {
        $('#uslugi').stop().animate({
            height: originalHeight
        }, speed);
        $('.arrow_next').removeClass('arrow_back');
    })
	

	$(".front").click(function(){
		$(".front").removeClass('activ');
		$(this).addClass('activ');
		var slideid = $(this).attr('id');
		$(".front span").removeClass('activ');
		$("#"+slideid+" span").addClass('activ');
		$('.slide div[class*="slide"]').fadeOut();
		$('.'+slideid+'').fadeIn(500);	

		 if($(this).attr('class')=='front activ'){
		 	 var cl = $(this).attr('id');
        $('.' + cl + '').attr('src', 'img/' + cl + '_act.png');
		 	
		 }else{
		 	

		 }
	});

	   $('.front').mouseover(function() {
        var cl = $(this).attr('id');
        $('.' + cl + '').attr('src', 'img/' + cl + '_act.png');

        if($(this).attr('class')=='front activ'){

        }else{
        		$('.front').mouseout(function() {
            $('.' + cl + '').attr('src', 'img/' + cl + '.png');
        });
        } 
        
    });




	

$("#btn2,#btn4,#btn5,#btn6,#btn8").click(function(){
	$('#wrapper').attr('class','blur');

}); 
	$(".hide,.close").click(function(){
	$('#wrapper').attr('class','');
	$.magnificPopup.close();
}); 

	$("#btn2,#btn4,#btn5,#btn6,#btn8").magnificPopup({
		disableOn: 700,
		mainClass: 'mfp-fade',
		preloader: false,
		fixedContentPos: false
});


/*Валидация и отправка формы "обратный звонок"*/

$("#button").click(function() {
	var name = $("#name");
	var phone = $("#phone");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #dfdfdf");
		send_name = 1;
	}
	if(phone.val()!= ''){		
		phone.css("border","1px solid #dfdfdf");
		send_phone = 1;
	}else{
		send_phone = 0;
		phone.css("border","1px solid red");
		alert('Введите телефон');
	}
	
	if(send_name == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/mail.php",
			data:"name="+name.val()+"&phone="+phone.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){		
				alert('Заявка оставленна');	
				$('#wrapper').attr('class','');
				$.magnificPopup.close();	
										
				}else{
					
				}}
		
	});
	}
});	


	/*Валидация поля телефона*/
jQuery(function($){   
jQuery(".phone").mask("+375 (99)-999-99-99");
});

function setHeiHeight() {
        $('#block4').css('margin-top', $('#block3-1').height() + 'px');

    }
    setHeiHeight(); 
});