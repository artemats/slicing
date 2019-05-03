var enableAnimate = false;
var cardHeight = 0;
var navPanelWidth = $('.page-nav').outerWidth();
var retina = window.devicePixelRatio > 1;

if($.browser.name !== 'msie' && $.browser.name !== 'msedge') {

    enableAnimate = true

} else {

    $('body').addClass('msie');

}

if($.browser.name == 'safari') {

    $('body').addClass('safari');

}

$(document).ready(function () {

    $('[data-fancybox]').fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
    });

    $('.partners-carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 11,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 9
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

    //tabs theme
    $(document).on('click', '.tab-link[data-nav-id]', function (e) {

        e.preventDefault();

        var tabBtn = $(this),
            navId = tabBtn.attr('data-nav-id');

        $('.tab-link').removeClass('active');
        tabBtn.addClass('active');

        $('.tabs-content-carousel').slick('slickGoTo', navId);

    });

    //scroll tabs theme
    $('.__scroll-link').on('click', function () {

        var tabBtn = $(this),
            scrollNavId = tabBtn.attr('data-scroll-id');

        if( $(scrollNavId)[0] ){

            $("html, body").animate({
                scrollTop: $(scrollNavId).offset().top - 50
            }, 800);

        } else {

            console.log('can\'t find scroll content');

        }

    });

    //toggle collapse items
    $('.collapse-wrap-item-header').on('click', function () {

        var collapseItem = $(this).parent('.collapse-wrap-item'),
            collapseContent = collapseItem.find('.collapse-wrap-item-content');


        if(collapseItem.hasClass('active')){

            collapseContent.slideUp(400);
            collapseItem.removeClass('active');


        } else {

            collapseContent.slideDown(400);
            collapseItem.addClass('active');

        }

        $('.collapse-wrap-item-content').not(collapseContent).slideUp(400);
        $('.collapse-wrap-item').not(collapseItem).removeClass('active');

    });

    $('.nav-wrap').scroll(function () {

        var navScrollVal = $(this).scrollTop();

        if(navScrollVal >= 1) {

            $('.header .logo').addClass('__hidden-theme');

        } else {

            $('.header .logo').removeClass('__hidden-theme');

        }

    });

    //toggle sub-list
    $(document).on('click', '.toggle-sub-list', function () {

        var btn = $(this);

        btn.parent('.nav-list-item').children('.sub-nav-list').slideToggle(400);
        btn.parent('.nav-list-item').toggleClass('__open-theme');

    });

    //toggle main menu
    $('.toggle-nav-menu').on('click', function () {

        var btn = $(this);

        if(btn.hasClass('active')) {

            closeNavMenu();

        } else {

            openNavMenu();

        }

    });

    $('.close-modal').on('click', function () {

        if($('.toggle-nav-menu').hasClass('active')) {

            closeNavMenu();

        }

    });

    //tabs toggle theme
    $('.tab-link.__select-theme').on('click', function () {

        var tabBtn = $(this),
            tabBtnId = tabBtn.attr('data-content-id'),
            tabCurrentContent = $('.tab-content-item[data-tab-id="'+ tabBtnId +'"]');

        $('.tab-link.__select-theme').removeClass('active');
        tabBtn.addClass('active');

        if(parseInt(tabBtnId) === 1) {

            $('.__tabs-content-wrap').addClass('__last-theme');

        } else {

            $('.__tabs-content-wrap').removeClass('__last-theme');

        }

        $('.tab-content-item').not(tabCurrentContent).hide();
        tabCurrentContent.show();

    });

    //reference toggle theme
    $(document).on('click', '.__toggle-link, .__toggle-row', function () {

        var title = $(this),
            row = title.closest('.reference-wrap-row'),
            rowContent = row.children('.reference-wrap-row-content-wrap').slideToggle(400);

        title.closest('.reference-wrap-row').toggleClass('__open-theme');

    });

    //reference close expands rows
    $(document).on('click', '.__close-rows', function () {

        var row = $(this),
            rowWrap = row.closest('.reference-wrap-row').find('.reference-wrap-row-content-wrap'),
            rowsExpand = rowWrap.find('.reference-wrap-row-content-body');

        rowsExpand.slideUp();

        if(!rowWrap.is('visible')) {

            rowWrap.slideDown();
            row.closest('.reference-wrap-row').addClass('__open-theme');

        }

    });

    //reference open expands rows
    $(document).on('click', '.__open-rows', function () {

        var row = $(this),
            rowWrap = row.closest('.reference-wrap-row').find('.reference-wrap-row-content-wrap'),
            rowsExpand = rowWrap.find('.reference-wrap-row-content-body');

        rowsExpand.slideDown();

        if(!rowWrap.is('visible')) {

            rowWrap.slideDown();
            row.closest('.reference-wrap-row').addClass('__open-theme');

        }

    });

    //reference togle single row
    $(document).on('click', '.reference-wrap-row-content-header', function () {

        var row = $(this),
            rowWrap = row.closest('.reference-wrap-row-content').find('.reference-wrap-row-content-body');

        rowWrap.slideToggle();

    });

    //file load progress
    $('input[type="file"]').on('change', function (e) {
        var inputWrap = $(this).closest('.__file-theme');
        var fileName;
        var nameElement = inputWrap.find('.file-input-title');
        var nameElementTitle = nameElement.attr('data-title');

        if(e.target.files[0]) {

            fileName = e.target.files[0].name;

            nameElement.html(fileName);

        } else {

            nameElement.html(nameElementTitle);

        }

    });

    //check step from
    $('.check-step').on('click', function (e) {

        e.preventDefault();

        var parentStep = $(this).closest('.form-wrap');

        parentStep.find('.input-item').each(function () {

            var input = $(this);

            if(input.val().length <= 0) {

                input.addClass('error');

            } else {

                input.removeClass('error');

            }

        });

        if(parentStep.find('.input-item.error')[0]) {

            $('.step-2').addClass('disabled');

        } else {

            $('.step-2').removeClass('disabled');
            $("html, body").animate({
                scrollTop:  $('.step-2').offset().top
            }, 800);

        }

    });

    //switch theme
    $(document).on('click', '.switch-panel-link', function () {

        var btn = $(this),
            switchWrap = $(this).closest('.switch-wrap'),
            btnId = btn.attr('data-link-id'),
            switchContent = switchWrap.find('.switch-content-item[data-content-id="'+ btnId +'"]');

            if(!btn.hasClass('active')) {

                switchWrap.find('.switch-panel-link').not(btn).removeClass('active');
                $('.switch-content-item').not(switchContent).hide();
                switchContent.show();
                btn.addClass('active');

            }

    });

    fetchCountriesJSON();
    calculateNewScale();

});

$(window).on('load', function () {

    $('.__on-load-show').not('.__on-load-show.__step').removeClass('__hide');
    $('.__on-load-show.__step').each(function (i) {
        setTimeout(function(){
            $('.__on-load-show.__step').eq(i).removeClass('__hide');
        }, 200 * (i+1));
    });

    //replace images attribute
    $('img[data-src]').each(function(){
        $(this).attr('src',$(this).attr('data-src')).removeAttr('data-src');
    });

    $('.sub-nav-list').each(function () {

        var subList = $(this);

        if(subList.parent().parent('.sub-nav-list')[0]) {

            subList.parent().parent('.sub-nav-list').addClass('__flex-theme');

        } else if(1) {

            subList.parent('.nav-list-item').addClass('__has-sub-list');
            subList.parent('.nav-list-item').append('<button class="toggle-sub-list"></button>');

        } else {

            return false

        }

    });

    $('.tabs-content-carousel').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'ease-in-out',
        prevArrow: $('.tabs-content-carousel .slick-prev'),
        nextArrow: $('.tabs-content-carousel .slick-next'),
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        var activeTab = $('.tab-link[data-nav-id="'+ currentSlide +'"]');

        if(!activeTab.hasClass('active')) {

            $('.tab-link').removeClass('active');
            activeTab.addClass('active');

        } else {

            return false

        }

    });

    $(".table-wrap-scroll").scroll(function(){
        $(".custom-scrollbar")
            .scrollLeft($(".table-wrap-scroll").scrollLeft());
    });
    $(".custom-scrollbar").scroll(function(){
        $(".table-wrap-scroll")
            .scrollLeft($(".custom-scrollbar").scrollLeft());
    });

    showOnScroll($(window).scrollTop());
    setFixedScrollPanel($(window).scrollTop());
    setCollapseTitleNum();
    setCardHeight();
    openFirstCollapseItem();
    initCustomSelect();
    setTabsNavNumbs();

});

$(window).on('scroll', function () {

    var vScroll = $(this).scrollTop();

    if(vScroll >= 1 && $('.toggle-nav-menu').hasClass('active')) {

        closeNavMenu();

    } else {}

    showOnScroll(vScroll);
    setFixedScrollPanel(vScroll);
    fixedNavPanel(vScroll);

});

$(document).mousemove( function( e ) {

    if($(window).width() > 768) {

        $('.__move-element.__move-speed-4').parallax( -200, e );
        $('.__move-element.__move-speed-3').parallax( -100, e );
        $('.__move-element.__move-speed-2').parallax( -50, e );
        $('.__move-element.__move-speed-1').parallax( -20, e );

    }
});

$(window).resize(function () {

    setWidthFixedPanel();
    calculateNewScale();

});

function setCardHeight() {

    if($(window).width() > 767) {

        $('.card-item.__inline-theme').each(function () {

            var card = $(this);

            if(card.outerHeight() > cardHeight) {

                cardHeight = card.outerHeight();

            }

        });

        $('.card-item.__inline-theme').css({
            'height': cardHeight
        });

    }

}

function setCollapseTitleNum() {

    $('.collapse-wrap-item-header-title-num').each(function (i) {

        var num = $(this);

        i += 1;

        if( i >= 10 ) {

            num.html(i + '.');

        } else {

            num.html('0' + i + '.');

        }

    });

}

function openFirstCollapseItem() {

    $('.collapse-wrap-item:nth-child(2)').addClass('active');
    $('.collapse-wrap-item:nth-child(2)').find('.collapse-wrap-item-content').slideDown(400);


}

function openNavMenu() {

    $('.close-modal').fadeIn(400);
    $('.toggle-nav-menu').addClass('active');
    $('.nav-wrap').addClass('__open-theme');

}

function closeNavMenu() {

    $('.close-modal').fadeOut(400);
    $('.toggle-nav-menu').removeClass('active');
    $('.nav-wrap').removeClass('__open-theme');

}

function showOnScroll(vScroll) {

    $('.__on-scroll-show').not('.__on-scroll-show.__step').each(function () {

        var element = $(this);

        if (element.offset().top <= (vScroll + ($(window).height() / 1.2))) {

            element.not('.__on-scroll-show.__step').removeClass('__hide');

        }

    });

    $('.__on-scroll-show.__step').each(function (i) {

        var element = $(this);

        if (element.offset().top <= (vScroll + $(window).height())) {

            setTimeout(function () {

                $('.__on-scroll-show.__step').eq(i).removeClass('__hide');

            }, 100 * (i + 1));

        }

    });


}

function setFixedScrollPanel(vScroll) {

    $('.scroll-nav-section').each(function () {

        var navSection = $(this),
            navPanel = navSection.find('.scroll-nav-section-panel');

        if(vScroll > navSection.offset().top) {

            navPanel.addClass('__fixed-theme');

        } else {

            navPanel.removeClass('__fixed-theme');

        }

    });

    $('.__scroll-link[data-scroll-id]').each(function () {

        var currLink = $(this),
            refElement = $(currLink).attr('data-scroll-id');

        if ($(refElement).offset().top <= (vScroll + 100) && $(refElement).offset().top + $(refElement).height() > vScroll) {

            $('.tab-link.__scroll-link').removeClass('active');
            currLink.addClass('active');

        }
        else{
            currLink.removeClass("active");
        }

    });

}

function initCustomSelect() {

    if ( $('.custom-select')[0] && enableAnimate ) {
        $('.custom-select').msDropDown({
            width: 90,
            visibleRows: 6
        }).on('change', function () {
            console.log($(this).val());
        });

        $('.dd .ddChild').mCustomScrollbar({

        });

    }

}

function fetchCountriesJSON() {

    $.ajax({
        url: '/wp-content/themes/snapinspect/assets/country-by-abbreviation.json',
        type: 'GET',
        cache: false,
        success: function (data) {

            if (data) {

                data.forEach(function (item) {

                    $('#countries').append('<option '+ item.abbreviation +'>'+ item.country +'</option>>');

                });

                setTimeout(initCustomSelect, 1000);

            }

        },
        error: function () {
            console.log('Error in parse');
        }
    });

}

function fixedNavPanel(vScroll) {

    $('.page-nav').each(function () {

        var navPanel = $(this);
        var startLine = $('.start-sticky');
        var stopLine = $('.stop-sticky');
        var stopLinePos = Math.abs(Math.min(0, $(stopLine).offset().top - vScroll - $(window).height()));

        if(vScroll > startLine.offset().top) {

            navPanel.addClass('__fixed-theme').css({
               'max-width': navPanelWidth
            });

        } else {

            navPanel.removeClass('__fixed-theme');

        }

        if($(stopLine).offset().top - vScroll < $(window).height()) {

            navPanel.css({
               'transform': 'translate(0,-'+ stopLinePos +'px)'
            });

        } else {

            navPanel.css({
                'transform': 'translate(0,0px)'
            });

        }

    });

}

function setWidthFixedPanel() {

    $('.page-nav').each(function () {

        $(this).css({
            'max-width': navPanelWidth
        });

    });

}

function setTabsNavNumbs() {

    $('.tabs-wrap').not('.tabs-wrap.__scroll-nav-theme').find('.tab-link').each(function (i) {

        $(this).attr('data-nav-id', i);

    });
    $('.tabs-wrap').not('.tabs-wrap.__scroll-nav-theme').find('.tab-link').eq(0).addClass('active');

}

function calculateNewScale() {

    var percentageOn1 = $(window).width() / 1920;

    if($(window).width() > 1920) {

        $('#wrapper').css({
            "-moz-transform": "scale(" + percentageOn1 + ")",
            "-webkit-transform": "scale(" + percentageOn1 + ")",
            "transform": "scale(" + percentageOn1 + ")"
        });

    }

    // if (retina) {
    //     console.log('the user has a retina display');
    // }
    // else {
    //     console.log('the user has a non-retina display');
    // }

}
