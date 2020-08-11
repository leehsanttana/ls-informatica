
$(function(){

  function atualizar_informacoes() {
    $("#nomes-parceiros").text( $(".slick-center").data("name") );
  }

  $(".parceiros-slider").on('init', function(){
    atualizar_informacoes();
  });

  $(".parceiros-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".parceiros-slider").on('afterChange', function(){
    atualizar_informacoes();
  });

})

