window.load = function () {};
$(document).ready(function () {
   
   

    
    // 주메뉴 관련 코드
    let header = $('.header');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();
        
        if (scrollbar > 0) {
            header.addClass('header_active');
        } else {
            header.removeClass('header_active');
        }
    });




    // 모바일 메뉴 관련
    let gnb_mobile=$('.gnb_mobile');
    let mobile_menu=$('.mobile_menu');
    let mobile_close=$('.mobile_close');
    gnb_mobile.click(function(){
        mobile_menu.toggleClass('mobile_menu_active');
    });
    mobile_close.click(function(){
        mobile_menu.removeClass('mobile_menu_active');
    });
    // 화면의 너비가 변하면 체크
    $(window).resize(function(){
        let w=$(window).width();
        
        if(w>1000){
            mobile_menu.removeClass('mobile_menu_active');
        }
    });

    //비주얼 슬라이드영역
    let sw_visual_slide_img;
    // 포커스 될 블렛
    let bulletsIndex = 0;

    let sw_visual= new Swiper('.sw_visual',{
        loop:true,        
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        pagination: {
            el: ".sw_visual_pg",
            clickable: true
        },
        direction: "vertical",
        on: {
            init: function () {
            },          
            slideChange: function() {
                if(!sw_visual_slide_img) {
                    sw_visual_slide_img = $('.sw_visual .swiper-slide img');
                }                
               // this.activeIndex : 활성화 되어야 할 슬라이드
                sw_visual_slide_img.eq(this.activeIndex).css({
                    opacity: 0,
                    'margin-left': '-15%'
                });
                sw_visual_slide_img.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    'margin-left': '0%'
                }, 800);

                // this.previousIndex : 보였었던 슬라이드
                sw_visual_slide_img.eq(this.previousIndex).stop().animate({
                    opacity: 0
                }, 300);    

                // 마치 클릭이 되었을 때의 index 처럼
                // 실제 html 코딩의 순서 값이 넘어온다.
                              
                pgMove(this.realIndex);
               
            }
        },
    }); 

    // sw_visual_pg 를 위한 코드
    // 선택된 것이 바뀌어지는 감시한다.  
    // 목록(blullet)을 저장한다.
    let bullets = $('.sw_visual_pg .swiper-pagination-bullet');
  
    $.each(bullets, function (index, item) {
        $(this).click(function () {
            pgMove(index);
        });
    });
    
    function pgMove(_num){
        // 동일한 포커스 시
        if (_num == bulletsIndex) {
            // 아래로 가지마라.
            return;
        }
        
        $('.sw_visual_pg .swiper-pagination-bullet').removeClass('sw_visual_pg_active');
        $('.sw_visual_pg .swiper-pagination-bullet').eq(bulletsIndex).addClass('sw_visual_pg_active');

        bulletsIndex = _num;
    }
    // 스토리 모션
    
    $('.visual_story').waypoint(function(dir) {
        if(dir=="down") {
            $('.visual_story').addClass('visual_story_active');
        }else{
           
        }
    }, 
    { 
        offset: '70%' 
    });

    // 메인 모션
    $('.contents_1').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_1').addClass('contents_1_active');
        }else{
            
        }
    }, 
    { 
        offset: '70%' 
    });

    $('.contents_2').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_2').addClass('contents_2_active');
        }else{
           
        }
    }, 
    { 
        offset: '70%' 
    });
    $('.contents_3').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_3').addClass('contents_3_active');
        }else{
           
        }
    }, 
    { 
        offset: '70%' 
    });
    $('.contents_4').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_4').addClass('contents_4_active');
        }else{
            
        }
    }, 
    { 
        offset: '70%' 
    });
    $('.contents_5').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_5').addClass('contents_5_active');
        }else{
            
        }
    }, 
    { 
        offset: '70%' 
    });
    $('.contents_6').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_6').addClass('contents_6_active');
        }else{
            
        }
    }, 
    { 
        offset: '70%' 
    });
    $('.contents_7').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_7').addClass('contents_7_active');
        }else{
            
        }
    }, 
    { 
        offset: '70%' 
    });
    $('.contents_8').waypoint(function(dir) {
        if(dir=="down") {
            $('.contents_8').addClass('contents_8_active');
        }else{
            
        }
    }, 
    { 
        offset: '70%' 
    });

    $('.gallery_txt1').waypoint(function(dir) {
        if(dir=="down") {
            $('.gallery_txt1').addClass('gallery_txt_active');
            $('.gallery_txt2').addClass('gallery_txt_active');
        }else{
            
        }
    }, 
    { 
        offset: '100%' 
    });
    
    
    

});