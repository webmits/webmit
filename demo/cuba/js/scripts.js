$(document).ready(function() {   
$('#button_one,#button_two').click(function(){
	$('.popup').fadeIn(1000);	
}); 
$('.bg_popup,.circle').click(function(){
	$('.popup, #bg').fadeOut(1000);
});

jQuery(function($){   
jQuery("#popup_phone").mask("+7 (999) 999-99-99");

});

$('.about_li').css({'opacity':'0.01'});
$('#header .h2').delay(500).show("slide", { direction: "right" }, 1000);
$('div.hide').delay(500).show("slide", { direction: "left" }, 1000);	


   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1200);
      e.preventDefault();
   });
   return false;
});

	$(document).ready(function() { 

$("#popup_button").click(function(){
	var name = $("#popup_name");
	var phone = $("#popup_phone");
	if(name.val()==''){
		name.css("background","red");
		send_name = 0;
	}else{
		name.css("background","#273a71");
		send_name = 1;
	}
	if(phone.val()==''){
		
		phone.css("background","red");
		send_phone = 0;
	}else{
		phone.css("background","#273a71");
		send_phone = 1;
	}
	if(send_name == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/order.php",
			data:"name="+name.val()+"&phone="+phone.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup").hide();
					$("#bg").show();
					$("#bg_popup_th > p.text").text("Thanks");
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup").hide();
					$("#bg").show();
					$("#bg_popup_th > p.text").text("Not all fields are filled");			
				}}
		
	});
	}
});	

	function isValidEmailAddress(emailAddress){
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
return pattern.test(emailAddress);
}

$("#button_three").click(function(){
	var name = $("#name");
	var email = $("#email");
	var message = $("#message");
	if(name.val()==''){
		name.css("background","red");
		send_name = 0;
	}else{
		name.css("background","#273a71");
		send_name = 1;
	}
	if(email.val()== ''  || isValidEmailAddress(email.val()) == false){
		email.css("background","red");
		send_email = 0;
	}else{
		email.css("background","#273a71");
		send_email = 1;
	}
	if(message.val()==''){
		
		message.css("background","red");
		send_message = 0;
	}else{
		message.css("background","#273a71");
		send_message = 1;
	}
	if(send_name == 1 && send_email == 1 && send_message == 1){
		$.ajax({
		type:"POST",
			url:"inc/order2.php",
			data:"name="+name.val()+"&email="+email.val()+"&message="+message.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup").hide();
					$("#bg").show();
					$("#bg_popup_th > p.text").text("Thanks");
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup").hide();
					$("#bg").show();
					$("#bg_popup_th > p.text").text("Not all fields are filled");			
				}}
		
	});
	}
});	

	});
	
	    $(window).scroll(function(){
		
		if($(this).width()>1100){
			if($(this).scrollTop()>230){
				
				$('.about_li').delay(500).css({'opacity':'1','transform':'scale(1, 1)','-moz-transform':'scale(1, 1)','-ms-transform':'scale(1, 1)','-o-transform':'scale(1, 1)'});		
						
			}else{
				 $('.about_li').delay(500).css({'opacity':'0.01','transform':'scale(0.5, 0.5)'});
			}		
			
			if($(this).scrollTop()>900){
				$("ul.ul_team").css('display','block');
				$('#team .ul_team li').removeClass().addClass('animated zoomInRight');

			}else{
				$("ul.ul_team li").removeClass().addClass('animated zoomOutLeft');
			}	
			
			
			if($(this).scrollTop()>1800){
				$("ul.ul_skills").css('display','block');
				$('#skills .ul_skills li').removeClass().addClass('animated flipInX');

			}else{
				$('#skills .ul_skills li').removeClass().addClass('animated flipOutX');
			}	
			
			if($(this).scrollTop()>2500){
				$("ul#ul_portfolio").css('display','block');
				$('#container #ul_portfolio li:even').removeClass('bounceOut').addClass('animated bounceInLeft');
				$('#container #ul_portfolio li:odd').removeClass('bounceOut').addClass('animated bounceInRight');

			}else{
				$('#container #ul_portfolio li').removeClass('bounceInLeft','bounceInRight').addClass('animated bounceOut');
				
				
			}	
			
			if($(this).scrollTop()>3900){
				$("ul.ul_reciews").css('display','block');
				$('#reviews .ul_reciews li').removeClass().addClass('animated rotateIn');
				
			}else{
				$('#reviews .ul_reciews li').removeClass().addClass('animated rotateOut');
			}	
			
			if($(this).scrollTop()>4700){
				$("#form_cont").css('display','block');
				$('#form_cont input, #form_cont textarea').removeClass().addClass('animated shake');
				
			}else{
				$('#form_cont input, #form_cont textarea').removeClass('shake');
			}	
		}else if($(this).width()>1){
			if($(this).scrollTop()>530){
				
				$('.about_li').delay(500).css({'opacity':'1','transform':'scale(1, 1)','-moz-transform':'scale(1, 1)','-ms-transform':'scale(1, 1)','-o-transform':'scale(1, 1)'});		
						
			}else{
				 $('.about_li').delay(500).css({'opacity':'0.01','transform':'scale(0.5, 0.5)'});
			}		
			
			if($(this).scrollTop()>1500){
				$("ul.ul_team").css('display','block');
				$('#team .ul_team li').removeClass().addClass('animated zoomInRight');

			}else{
				$("ul.ul_team li").removeClass().addClass('animated zoomOutLeft');
			}	
			
			
			if($(this).scrollTop()>2700){
				$("ul.ul_skills").css('display','block');
				$('#skills .ul_skills li').removeClass().addClass('animated flipInX');

			}else{
				$('#skills .ul_skills li').removeClass().addClass('animated flipOutX');
			}	
			
			if($(this).scrollTop()>3600){
				$("ul#ul_portfolio").css('display','block');
				$('#container #ul_portfolio li:even').removeClass('bounceOut').addClass('animated bounceInLeft');
				$('#container #ul_portfolio li:odd').removeClass('bounceOut').addClass('animated bounceInRight');

			}else{
				$('#container #ul_portfolio li').removeClass('bounceInLeft','bounceInRight').addClass('animated bounceOut');
				
			}	
			
			if($(this).scrollTop()>4600){
				$("ul.ul_reciews").css('display','block');
				$('#reviews .ul_reciews li').removeClass().addClass('animated rotateIn');
				
			}else{
				$('#reviews .ul_reciews li').removeClass().addClass('animated rotateOut');
			}	
			
			if($(this).scrollTop()>5600){
				$("#form_cont").css('display','block');
				$('#form_cont input, #form_cont textarea').removeClass().addClass('animated shake');
				
			}else{
				$('#form_cont input, #form_cont textarea').removeClass('shake');
			}	
		}
		
	});