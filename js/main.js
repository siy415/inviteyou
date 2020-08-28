$(document).ready(function(){
  initScale();
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
}

window.onresize = function(){
    initScale();
}

window.onload = function() {
    initScale();
}
