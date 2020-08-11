function scrollNav() {
  $('.nav a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().delay(200).animate({
      scrollTop: $($(this).attr('href')).offset().top -78 
    }, 600);
    return false;
  });
}

function scrollButtom() {
  $('.rounded-circle a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().delay(200).animate({
      scrollTop: $($(this).attr('href')).offset().top 
    }, 600);
    return false;
  });
}

function scrollOrcamento() {
  $('.btn-orcamento').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().delay(200).animate({
      scrollTop: $($(this).attr('href')).offset().top 
    }, 600);
    return false;
  });
}

function rotate(){
  document.getElementById("girar").classList.toggle('toggler');
}

scrollNav();
scrollButtom();
scrollOrcamento();


// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
