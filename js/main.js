$(document).ready(function(){
	$('#btnSend').click(function(){
		var errores = '';

		if($('#names').val() == '')
		{
			errores += '<p>Ingrese su nombre.</p>';
			$('#names').css("border-bottom-color", "#F14B4B")		
		}

		else{
			$('#names').css("border-bottom-color", "#d1d1d1")
		}

		if($('#email').val() == '')
		{
			errores += '<p>Ingrese su correo electronico.</p>';
			$('#email').css("border-bottom-color", "#F14B4B")		
		}

		else{
			$('#email').css("border-bottom-color", "#d1d1d1")
		}

		if($('#mensaje').val() == '')
		{
			errores += '<p>El mensaje no puede estar vacio.</p>';
			$('#mensaje').css("border-bottom-color", "#F14B4B")					
		}

		else{
			$('#mensaje').css("border-bottom-color", "#d1d1d1")
		}

		// Enviando Mensaje

		if(errores == '' == false){
			var mensajeModal = '<div class="modal_wrap">'+
									'<div class="mensaje_modal">'+
										'<h3>Información Requerida</h3>'+
										 errores+										
										'<span id="btnClose">Cerrar</span>'+
									'</div>'+	
							   '</div>'
			$('body').append(mensajeModal);	   
		}

		$('#btnClose').click(function(){
			$('.modal_wrap').remove();
		})
	});
});