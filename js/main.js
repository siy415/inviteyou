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
        var dw = window.innerWidth;
        var cw = parseInt( $("#image-container").css('width') );
        var ch = parseInt( $("#image-container").css('height') );
        var per = dw/cw;
        var per2 =dh/ch;

        if(per > per2 ){
            per = per2;
        }
        var gapH = ( dh - (ch*per) )/2;
        var gapW = ( dw - (cw*per) )/2
     }

     $("#contentsArea").css('transform', 'scale('+per+','+per+')');
     $('body').css('margin-top', gapH );
     $('body').css('margin-left', gapW );
}

window.onresize = function(){
    initScale();
}

window.onload = function() {
    initScale();
}
