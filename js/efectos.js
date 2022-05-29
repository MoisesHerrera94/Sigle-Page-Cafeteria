$(document).ready(function(){
	
	$('.menu a').each(function(index, element){
		$(this).css({
			'top':'-200px'
		});

		$(this).animate({
			'top':'0'
		}, 2000 + (index * 500));
	})

	if($(window).width() > 800){
		$('header .texto').css({
			'opacity':'0',
			'margin':'0'
		})

		$('header .texto').animate({
			'opacity':'1',
			'marginTop':'-52px'
		}, 1500)
	}

	//Efecto al menu de navegacion

	var acercaDe = $('#acerca-de').offset().top,
		platillos = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe
		})
	})

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 1230
		})
	})

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		})
	})

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		})
	})

})
