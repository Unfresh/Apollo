$(document).ready(function(){

    // Создаем переменые для кнопки и для меню
           
	var pull = $("#nav-button");
	var menu = $(".navigation ul");

    // Описываем событие при нажатии на кнопку
           
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
        
		e.preventDefault();

        // Открываем или скрываем меню
        
		menu.slideToggle();
        
        // Добавляем модивикатор -- active
        $(this).toggleClass("navigation-button--active");
	});


    // При изменении размера окна,в большую сторону,если меню было скрыто,то показываем его
	
   $(window).resize(function(){
        
        var w = $(window).width();
        if(w > 992)  {
            menu.removeAttr('style');
        }
        
    });
    
    //скрываем навинацию при клике на ссылку в ней
    
    var w = $(window).width();
    if ( w < 992 ) {
        $('nav.navigation a').on("click", function(){
            menu.slideToggle();
        })
    } 
    
    
    //    SLIDER CAROUSEL
    $("#header-slider").owlCarousel({
        singleItem:true,
        navigation:true,
        theme:"header-slider-theme",
        navigationText: ["", ""],
        slideSpeed:600,
    });
    
    
    //slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector:"nav a"
	});

});