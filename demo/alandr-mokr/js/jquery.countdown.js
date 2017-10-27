/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function($){
	
	// Количество секунд в каждом временном отрезке
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// Создаем плагин
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// инициализируем плагин
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// Осталось времени
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// Осталось дней
			d = Math.floor(left / days);
			updateDuo(0, 1, d);
			left -= d*days;
			
			// Осталось часов
			h = Math.floor(left / hours);
			updateDuo(2, 3, h);
			left -= h*hours;
			
			// Осталось минут
			m = Math.floor(left / minutes);
			updateDuo(4, 5, m);
			left -= m*minutes;
			
			// Осталось секунд
			s = left;
			updateDuo(6, 7, s);
			
			// Вызываем возвратную функцию пользователя
			options.callback(d, h, m, s);
			
			// Планируем следующий вызов данной функции через 1 секунду
			setTimeout(tick, 1000);
		})();
		
		// Данная функция обновляет две цифоровые позиции за один раз
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// Создаем разметку внутри контейнера
		$.each(['Days','Hours','Minutes','Seconds'],function(i){
			$('<span class="count'+this+'">').html(
				'<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="time_p">\
					<span></span>\
				</span>'
			).appendTo(elem);
			$('.countDays .time_p span').text('дней');
				$('.countHours .time_p span').text('часов');
				$('.countMinutes .time_p span').text('минут');
				$('.countSeconds .time_p span').text('секунд');
			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+i+'"></span>');
				$('.countDays .time_p span').text('дней');
				$('.countHours .time_p span').text('часов');
				$('.countMinutes .time_p span').text('минут');
				$('.countSeconds .time_p span').text('секунд');
			}
		});

	}

	// Создаем анимированный переход между двумя цифрами
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// Мы уже вывели данную цифру
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit static',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});
		
		// Класс .static добавляется, когда завершается анимация.
		// Выполнение идет более плавно.
		
		digit
			.before(replacement)
			.addClass('no')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,position:'absolute',opacity:1},'fast',function(){
				
			});
	}
})(jQuery);