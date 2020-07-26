$(document).ready(function(){
    $(".fixed-menu .fa-cog").on("click",function(){
        $(this).parent().parent(".fixed-menu").toggleClass("is-vissible");
        if($(this).parent().parent(".fixed-menu").hasClass("is-vissible")){
            
           $(this).parent().parent(".fixed-menu").animate({
                left:0
            },500);
            
        }else{
          
            $(this).parent().parent(".fixed-menu").animate({
                left:"-" + $(this).parent().parent(".fixed-menu").innerWidth()
            },500); 
            
        }
    });
    $(".change-color li").on("click",function(){
        $("body").attr("data-color",$(this).data("color"));
    });
    $(".navbar .navbar-nav .nav-item a,.fixed-menu .fixed-info p a").on("click",function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$("#"+$(this).data("scroll")).offset().top
        },1000);
    });
    $(".navbar .navbar-nav .nav-item a").on("click",function(){
        $(".navbar .navbar-nav .nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $(window).scroll(function(){
        var scrollToTop=$(".scroll-to-top");
        if($(window).scrollTop()>=1000){
            scrollToTop.fadeIn(400);
            
        } else{
             scrollToTop.fadeOut(400);
        }
    });
    $(".scroll-to-top").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },1000)
    });   
    });