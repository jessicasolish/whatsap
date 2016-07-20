function horaPeruana(){
	var fecha=new Date()
	var minutos=fecha.getMinutes()
 	if(minutos<10)
 		minutos="0"+minutos
 	var horas=fecha.getHours()
 	if(horas<10)
 		horas="0"+horas
 	return horas+":"+minutos
}
var cont=0;
var laboratoria = [];
var mariana = [];
var aldo = [];
var chama = [];
var chamo = [];
var katy = [];
var andrea = [];
var raymi = [];
var papu = [];
$(document).ready(function(){
  $('.comment').emoticonize({

        });

$('.msj').click(function hola(){
    var data=$(this).attr('data');
    var value=$(this).attr('value');
    var imag = $(this).find('img').attr('src');
    $('.new').html('<img src="'+imag+'" class="img-circle"/>')
    $('.new').append('<span>'+data+'</span>');
    $('#blanco').empty();



});
$('#enviomsj').keypress(function(e){
    var hora=horaPeruana();
    var mensaje = $('#enviomsj').val();
    if(e.which == 13){
        $(this).val('');
        $('#blanco').append('<div class="mensaje comment">'+mensaje+"</div>");
        $('#blanco').append('<span>'+hora+'</span>');
		$('.comment').emoticonize({

			});

        if(value==="1"){
          laboratoria.push(mensaje);
      }
        else if(value==="2"){
          raymi.push(mensaje);

    }
        else if(value==="3"){
          mariana.push(mensaje);

  }
  else if(value==="4"){
  chama.push(mensaje);

}
else if(value==="5"){
chammo.push(mensaje);

}
else if(value==="6"){
andrea.push(mensaje);

}
if(value==="7"){
papu.push(mensaje);

}
if(value==="8"){
katy.push(mensaje);

}
if(value==="9"){
aldo.push(mensaje);


}


    }
    else{
    }
});
$.expr[':'].icontains = function(obj, index, meta, stack){
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
    $(document).ready(function(){
        $('#buscador').keyup(function(){
                     buscar = $(this).val();
                     $('#lista li h4').removeClass('resaltar');
                            if(jQuery.trim(buscar) != ''){
                               $("#lista li h4:icontains('" + buscar + "')").addClass('resaltar');
                            }
            });
    });

});
