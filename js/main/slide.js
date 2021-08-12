function MainSlide(){
    var slide = $(".intro-slide .slide");
    var autoplayTick = null;
    var SLIDER_AUTOLAY_SPEED = 7000;
    var isAutoplay = false;
    var isTransition = false;
    var swipeType = 'swipelight';
    var slideIdx = null;
    
    function startAutoPlay(){
        if(autoplayTick){
            clearInterval(autoplayTick);
            autoplayTick = null;
        }
        autoplayTick = setInterval(function(){
            showNextSlide();
        },SLIDER_AUTOLAY_SPEED);
    };
    
    function showPrevSlide(){
    
    }
    
    function showNextSlide(){
        swipeType = 'swipeleft';
    
        setTimeout(function(){
    
            slideIdx = $(".intro-slide .slide.current").index();
            slide.eq(slideIdx).addClass("out-start");
            
            
            startAnimation(slideIdx)
        },100)
    }
    
    function startAnimation(idx){
        setTimeout(function(){
            slide.eq(idx).addClass("out");
            
    
            endAnimation(idx);
        },500)
    }
    
    function endAnimation(idx){
        setTimeout(function(){
            slide.eq(idx).removeClass("current");
            slide.eq(idx).removeClass("out-start");
            slide.eq(idx).removeClass("out");
    
            if(idx == slide.length - 1){
                slide.eq(0).addClass("current");
                slideIdx = 0;
            }else{
                slide.eq(idx + 1).addClass("current");
            }
        },1000)
    }
    
    
    startAutoPlay();
}

function MainSlideLoading(){
    timex=0;
    
    $.d('timexInt',setInterval(function() {
        timex++;
        var a = {pathStrokeWidth:15};
        if (timex==721) timex = 1;
        if (timex < 361){
            a.startAng = 0;
            a.endAng = timex;
        } else {
            a.startAng = timex-360;
            a.endAng = 360;
        };
        
        $('#timex').drawCircle(a);
    }, 20.25));
    
    // with this code we create the fixed size arc spinner
    casio = 0;
    
    //with this code we create the controllable spinner
    var meterArgs = {
        // the start angle of the arc in degrees
        startAng:0,        

        // the end angle of the arc in degrees       
        endAng:360,               

        // the radius of the circles
        r: 90,                   

        // the stroke color of the rail
        railStrokeColor:'#a4a9ad',        

        // the stroke width of the rail
        railStrokeWidth:15,           

        // the path's stroke color
        pathStrokeColor:'#0194ff', 

        // the path's stroke width       
        pathStrokeWidth:15       
    }
}


$(document).ready(function(){

    MainSlide();
    MainSlideLoading();
    
});