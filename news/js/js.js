$(document).ready(function(){
  var scroll1 = false;
  var scroll2 = false;

  $('.contador').each(function(i) {

                counter($(this));

        });

  $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
             if (scroll1 == false) {
                 loadNews();
                 scroll1 = true;
               } else if (scroll1 == true && scroll2 == false) {
                   loadNews1();
                   scroll2 = true;
                 }
             }

      });

});


function loadNews(){
  $.getJSON("data/noticias.json",function(json){
    $.each(json, function(index){
    $(".contenedorNoticias").append("<div class='noticia'><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 color-verde '><hr><header><h3>" + json[index].titulo1+
    "</h3></header><div class='col-xs-12 col-sm-12 col-md-3 col-lg-3 color-verde  margen-top center-block'><img src=" + json[index].imagen +
     " class='img-rounded img-responsive prueba' alt='Responsive image'>  <img src=" + json[index].imagenMovil +
     " class='img-rounded img-responsive pruebaMovil' alt='Responsive image'></div>"+"<section><p>"+ json[index].cuerpoNoticias1 +
     "</p></section><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 color-verde'><p><b>Leer más...</b>  <span class='glyphicon glyphicon-time fecha'>"+json[index].data+
     "</span></p></div></div></div>");


  });
  });
}

function loadNews1(){
  $.getJSON("data/noticias1.json",function(json){
    $.each(json, function(index){
    $(".contenedorNoticias").append("<div class='noticia'><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 color-verde '><hr><header><h3>" + json[index].titulo1+
    "</h3></header><div class='col-xs-12 col-sm-12 col-md-3 col-lg-3 color-verde  margen-top center-block'><img src=" + json[index].imagen +
     " class='img-rounded img-responsive prueba' alt='Responsive image'>  <img src=" + json[index].imagenMovil +
     " class='img-rounded img-responsive pruebaMovil' alt='Responsive image'></div>"+"<section><p>"+ json[index].cuerpoNoticias1 +
     "</p></section><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 color-verde'><p><b>Leer más...</b>  <span class='glyphicon glyphicon-time fecha'>"+json[index].data+
     "</span></p></div></div></div>");


  });
  });
}

  function counter(elem) {

  var id = setInterval(frame, 10);
  function frame() {
    if (elem.data('from') == elem.data('to')) {
      clearInterval(id);
    } else {

      contador=elem.data('from')+1;
      elem.data('from',contador);
      elem.html(elem.data('from'));
    }
  }
}
