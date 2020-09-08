$(document).ready(function(){
  initScale();

  alert("초대장을 클릭해주셔서 감사합니다.\n\n터치해 주세요!")

  var isScrolled = false;
  setInterval(function (){
    if($('.image-container .image').prop('ended') && !isScrolled){
      $('html, body').animate({
        scrollTop: $('.notice-container').offset().top
      }, 700);
      isScrolled = true;
    }
  }, 1)
})

function initScale()   {

   var ress = navigator.userAgent;
   if (ress.indexOf("Android 1.", 0) > -1 ){
        if (ress.indexOf("480", 0) > -1 ) { // 480x800
            var per = 0.5226824457593688;
        } else if(ress.indexOf("600", 0) > -1 ) { // 600 x 1024
            var per = 0.681
        } else if(ress.indexOf("1280", 0) > -1 ) { // 800 x 1280
            var per = 0.631
        }
    } else {
        var dh = window.innerHeight;
        var ch = parseInt( $(".invitation-movie").css('height') );
        var cch = parseInt($(".thumbnail-image").css('height'));

        var margins = (dh - ch - cch) / 2;

        if (margins < 0){
          margins = 0;
        }
     }

     $('.thumbnail-image').css('margin-top', margins );
     $('.thumbnail-image').css('margin-bottom', margins );
     $('.notice-container').css('height', dh);
     $('.notice-container').css('margin-left', 30);
     $('.notice-container').css('margin-right', 30);
     $('.content-title').css('padding-top', dh/15);
}

window.onresize = function(){
    initScale();
}

window.onload = function() {
    initScale();
}
