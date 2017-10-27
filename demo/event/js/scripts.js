$(document).ready(function() {
 
$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 2000);
        	return false; 
});

 
$('.order').click(function(){
	$('.popup, #form').fadeIn(1000);	
}); 
$('#btn').click(function(){
	$('.popup, #form1').fadeIn(1000);	
}); 
$('#btn2').click(function(){
	$('.popup, #form2').fadeIn(1000);	
}); 
$('#btn3').click(function(){
	$('.popup, #form3').fadeIn(1000);	
}); 
$('#btn4').click(function(){
	$('.popup, #form4').fadeIn(1000);	
}); 
$('#btn5').click(function(){
	$('.popup, #form5').fadeIn(1000);	
}); 
$('#btn6').click(function(){
	$('.popup, #form6').fadeIn(1000);	
}); 
$('#btn7').click(function(){
	$('.popup, #form7').fadeIn(1000);	
}); 
$('#btn8').click(function(){
	$('.popup, #form8').fadeIn(1000);	
}); 
$('#btn9').click(function(){
	$('.popup, #form9').fadeIn(1000);	
}); 
$('.bg_popup,.close').click(function(){
	$('.popup, #bg, .popup div[id*="form"]').fadeOut(1000);
	
}); 

/*интерактивный блок*/
$('.show li').click(function(){
	var slideid = $(this).attr('class');
	$('.show li').attr('id','');
	$(this).attr('id','activ');
	$('.slide').css('background','url("img/'+slideid+'.jpg")');
	$('.slide div[id*="slide"]').hide();
	$('#'+slideid+'').css("display","block");
	$('.slide_btn li[id="act"]').attr('id','');
	$('.slide_btn li.'+slideid+'').attr('id','act');	
}); 
$('.slide_btn li').click(function(){
	var slideid = $(this).attr('class');
	$('.show li').attr('id','');
	$('.show li.'+slideid+'').attr('id','activ');
	$('.slide').css('background','url("img/'+slideid+'.jpg")');
	$('.slide div[id*="slide"]').hide();
	$('#'+slideid+'').css("display","block");
	$('.slide_btn li[id="act"]').attr('id','');
	$('.slide_btn li.'+slideid+'').attr('id','act');	
});  
/*Валидация поля телефона*/
jQuery(function($){   
jQuery(".phone_inp").mask("+7 (999) 999-99-99");
});

/*Валидация поля email*/
	function isValidEmailAddress(emailAddress){
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
return pattern.test(emailAddress);
}

/*Валидация и отправка формы "обратный звонок"*/

$("#btn_form").click(function(){
	var name = $("#name_inp");
	var phone = $("#phone_inp");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()!= ''){		
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}else{
		send_phone = 0;
		phone.css("border","1px solid red");
		alert('Введите телефон');
	}
	
	if(send_name == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send.php",
			data:"name="+name.val()+"&phone="+phone.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

/*Валидация и отправка формы "связаться чтобы задать вопрос"*/

$("#btn_form1").click(function(){
	var name = $("#name_inp1");
	var phone = $("#phone_inp1");
	var email = $("#email_inp1");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(email.val()!= ''){
			if(isValidEmailAddress(email.val()) == false){
			email.css("border","1px solid red");
			send_email = 0;
			alert('Введите корректный email');
		}else{
			email.css("border","1px solid #959595");
			send_email = 1;
			}
	}else{
		send_email = 0;
		email.css("border","1px solid red");
		alert('Введите email');
	}
	
	if(send_name == 1 && send_email == 1){
		$.ajax({
		type:"POST",
			url:"inc/send1.php",
			data:"name="+name.val()+"&phone="+phone.val()+"&email="+email.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form1").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form1").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

/*Валидация и отправка формы "НАЧАТЬ ПРАЗДНИК"*/

$("#btn_form2").click(function(){
	var name = $("#name_inp2");
	var phone = $("#phone_inp2");
	var email = $("#email_inp2");
	var message = $("#message2");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()==''){
		phone.css("border","1px solid red");
		send_phone = 0;
		alert('Введите телефон');
	}else{
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}
	if(email.val()!= ''){
			if(isValidEmailAddress(email.val()) == false){
			email.css("border","1px solid red");
			send_email = 0;
			alert('Введите корректный email');
		}else{
			email.css("border","1px solid #959595");
			send_email = 1;
			}
	}else{
		send_email = 0;
		email.css("border","1px solid red");
		alert('Введите email');
	}
	
	if(send_name == 1 && send_email == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send2.php",
			data:"name="+name.val()+"&phone="+phone.val()+"&email="+email.val()+"&message="+message.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form2").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form2").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

/*Валидация и отправка формы "ХОЧУ УБЕДИТЬСЯ"*/

$("#btn_form3").click(function(){
	var name = $("#name_inp3");
	var phone = $("#phone_inp3");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()==''){
		phone.css("border","1px solid red");
		send_phone = 0;
		alert('Введите телефон');
	}else{
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}
	if(send_name == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send3.php",
			data:"name="+name.val()+"&phone="+phone.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form3").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form3").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

/*Валидация и отправка формы "ПОЛУЧИТЬ СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ"*/

$("#btn_form4").click(function(){
	var name = $("#name_inp4");
	var email = $("#email_inp4");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(email.val()!= ''){
			if(isValidEmailAddress(email.val()) == false){
			email.css("border","1px solid red");
			send_email = 0;
			alert('Введите корректный email');
		}else{
			email.css("border","1px solid #959595");
			send_email = 1;
			}
	}else{
		send_email = 0;
		email.css("border","1px solid red");
		alert('Введите email');
	}
	if(send_name == 1 && send_email == 1){
		$.ajax({
		type:"POST",
			url:"inc/send4.php",
			data:"name="+name.val()+"&email="+email.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form4").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form4").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

/*Валидация и отправка формы "ХОТИТЕ ЕЩЕ КРУЧЕ? ЖМИТЕ СИЛЬНЕЕ"*/

$("#btn_form5").click(function(){
	var name = $("#name_inp5");
	var phone = $("#phone_inp5");
	var email = $("#email_inp5");
	var message = $("#message5");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()==''){
		phone.css("border","1px solid red");
		send_phone = 0;
		alert('Введите телефон');
	}else{
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}
	if(email.val()!= ''){
			if(isValidEmailAddress(email.val()) == false){
			email.css("border","1px solid red");
			send_email = 0;
			alert('Введите корректный email');
		}else{
			email.css("border","1px solid #959595");
			send_email = 1;
			}
	}else{
		send_email = 0;
		email.css("border","1px solid red");
		alert('Введите email');
	}
	
	if(send_name == 1 && send_email == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send5.php",
			data:"name="+name.val()+"&phone="+phone.val()+"&email="+email.val()+"&message="+message.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form5").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form5").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

/*Валидация и отправка формы "Наши Цены первое предложение"*/

$("#btn_form6").click(function(){
	var name = $("#name_inp6");
	var phone = $("#phone_inp6");
	var email = $("#email_inp6");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()==''){
		phone.css("border","1px solid red");
		send_phone = 0;
		alert('Введите телефон');
	}else{
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}
	
	if(send_name == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send6.php",
			data:"name="+name.val()+"&phone="+phone.val()+"&email="+email.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form6").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form6").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	


/*Валидация и отправка формы "Наши Цены второе предложение"*/

$("#btn_form7").click(function(){
	var name = $("#name_inp7");
	var phone = $("#phone_inp7");
	var email = $("#email_inp7");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()==''){
		phone.css("border","1px solid red");
		send_phone = 0;
		alert('Введите телефон');
	}else{
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}
	
	if(send_name == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send7.php",
			data:"name="+name.val()+"&phone="+phone.val()+"&email="+email.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form7").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form7").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	


/*Валидация и отправка формы "Наши Цены третье предложение"*/

$("#btn_form8").click(function(){
	var name = $("#name_inp8");
	var phone = $("#phone_inp8");
	var email = $("#email_inp8");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()==''){
		phone.css("border","1px solid red");
		send_phone = 0;
		alert('Введите телефон');
	}else{
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}
	
	if(send_name == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send8.php",
			data:"name="+name.val()+"&phone="+phone.val()+"&email="+email.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form8").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form8").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

/*Валидация и отправка формы "НАЧАТЬ ПРАЗДНИК"*/

$("#btn_form9").click(function(){
	var name = $("#name_inp9");
	var phone = $("#phone_inp9");
	var email = $("#email_inp9");
	var message = $("#message9");
	if(name.val()==''){
		name.css("border","1px solid red");
		send_name = 0;
		alert('Введите имя');
	}else{
		name.css("border","1px solid #959595");
		send_name = 1;
	}
	if(phone.val()==''){
		phone.css("border","1px solid red");
		send_phone = 0;
		alert('Введите телефон');
	}else{
		phone.css("border","1px solid #959595");
		send_phone = 1;
	}
	if(email.val()!= ''){
			if(isValidEmailAddress(email.val()) == false){
			email.css("border","1px solid red");
			send_email = 0;
			alert('Введите корректный email');
		}else{
			email.css("border","1px solid #959595");
			send_email = 1;
			}
	}else{
		send_email = 0;
		email.css("border","1px solid red");
		alert('Введите email');
	}
	
	if(send_name == 1 && send_email == 1 && send_phone == 1){
		$.ajax({
		type:"POST",
			url:"inc/send9.php",
			data:"name="+name.val()+"&phone="+phone.val()+"&email="+email.val()+"&message="+message.val(),
			dataType:"html",
			cache:false,
			success: function(data){
				if (data=='yes'){					
					$(".popup, #form9").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('Спасибо!');	
					$("#bg_popup_th > p.text").text('Мы с вами обязательно свяжемся.');						
					$("#bg").show(function(event){
 				 
					});
										
				}else{
					$(".popup, #form9").hide();
					$("#bg").show();
					$("#bg_popup_th > h3").text('ОШИБКА');	
					$("#bg_popup_th > p.text").text(data);			
				}}
		
	});
	}
});	

});