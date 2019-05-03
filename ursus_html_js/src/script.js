$(document).ready(function () {

    //FOLDER CAROUSEL//
    $('.folder-carousel').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        console.log(event);

    });

    //drop words
    $('.drop-words').each(function () {

        var wordWrap = $(this);
        var word = wordWrap.text();
        var re = /\s* \s*/;
        var newStr = word.split(re);

        wordWrap.html('');

        $.each(newStr, function () {

            var newWord = this;

            wordWrap.append('<span class="word">'+ newWord +'</span> ');

        });

    });

    $('.word').each(function () {

        var word = $(this),
            wordText = word.text(),
            str = wordText.split('');

        word.html('');

        $.each(str, function () {

            word.append('<span class="letter">'+ this +'</span>');


        });

    });

    // WORK CAROUSEL //
    $('.work-carousel').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

    // OPEN MAIN MENU //
    $(document).on('click', '.toggle-main-menu', function () {

        var btn = $(this);

        if(btn.hasClass('active')) {

            closeMainMenu();

        } else {

            openMainMenu();

        }

    });

    // $('form').on('submit', function (e) {
    //
    //     e.preventDefault();
    //
    //     $(this).closest('.form-wrap').addClass('successfully');
    //
    //     setTimeout(function () {
    //
    //         $('.successfully').removeClass('successfully');
    //
    //     }, 4000);
    //
    // });

});

$(window).on('scroll', function () {

    var vScroll = $(this).scrollTop();

    zoomScrolling(vScroll);
    showOnScroll(vScroll);
    fixedSectionNavs(vScroll);

});

$(window).on('load', function () {

    $('.load-data').removeClass('load-data');
    $('.__show-on-load').removeClass('hide');
    setTimeout(function () {

        $('.drop-words').find('.letter').each(function (i) {

            setTimeout(function(){
                $('.drop-words .letter').eq(i).css({
                    'transform': 'translate(0,0)'
                });
            }, 10 * (i+1));

        });

        $('.slick-dots').addClass('show');

    }, 800);

    //replace images attribute
    $('img[data-src]').each(function(){
        $(this).attr('src',$(this).attr('data-src')).removeAttr('data-src');
    });

    //PORTFOLIO CAROUSEL//
    $('.portfolio-carousel').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

    $(document).on('click', '.to-top-link', function () {

        $("html, body").animate({
            scrollTop: $('.header').offset().top
        }, 800);

    });

    setImagesWidth();
    showOnScroll($(window).scrollTop());
    fixedSectionNavs($(window).scrollTop());
    setProcessNums();

    setTimeout(function () {

        setNumsForSlickDots();

    }, 500);

});

$(window).resize(function () {

    setImagesWidth();

});

function setNumsForSlickDots() {

    var a = 0;

    $('.slick-dots').each(function () {

        var li = $(this).find('li');

        li.each(function (i) {

            var dot = $(this).find('button');

            i += 1;

            if(i > 9) {

                a = i;

            } else {

                a = '0' + i;

            }

            dot.html(a);

        });

    });

    if(a >= 14) {

        initWorkDotsCarousel();

    }

}

function setImagesWidth() {

    $('.img-box').each(function () {

        var box = $(this),
            boxImg = box.find('.img-box-wrap'),
            boxWidth = box.outerWidth();

        boxImg.width(boxWidth);

    });

}

function zoomScrolling(vScroll) {

    $('.folder-carousel-slide-preview').each(function () {

        var preview = $(this);

        preview.css({
            'transform': 'scale('+ Math.max(1, 1 + (vScroll * 0.0001)) +') translate(0,'+ Math.max(1, 1 + (vScroll * 0.01)) +'px)'
        });

    });

    if($(window).width() > 991) {

        $('.detail-wrap-content').css({
           'transform': 'translate(0,-'+ Math.min(100, (vScroll * 0.2)) +'%)'
        });

    }

}

function showOnScroll(vScroll) {

    $('.__show-on-scroll').not('.__show-on-scroll.__step').each(function () {

        var element = $(this);

        if (element.offset().top <= (vScroll + ($(window).height() / 1.3))) {

            element.not('.__show-on-scroll.__step').removeClass('hide');

        }

    });

    $('.__show-on-scroll.__step').each(function (i) {

        var element = $(this);

        if (element.offset().top <= (vScroll + ($(window).height() / 1.3))) {

            setTimeout(function () {

                $('.__show-on-scroll.__step').eq(i).removeClass('hide');

            }, 100 * (i + 1));

        }

    });

}

function openMainMenu() {

    $('.toggle-main-menu').addClass('active');
    $('.nav').addClass('active');

}

function closeMainMenu() {

    $('.toggle-main-menu').removeClass('active');
    $('.nav').removeClass('active');

}

function fixedSectionNavs(vScroll) {

    $('.section-nav-label').each(function () {

        var navItem = $(this),
            navItemScrollValue = Math.min(0, navItem.offset().top - vScroll - $(window).height());

        if(navItem.offset().top <= (vScroll + $(window).height())) {

            navItem.css({
               'transform': 'translate(0,'+ Math.abs(navItemScrollValue / 2) +'px)'
            });

        }

    });

}

function setProcessNums() {

    $('.process-list .paragraph-box').each(function (i) {

        var box = $(this);

        i += 1;

        if(i >= 10) {

            i = i;

        } else {

            i = '0' + i;

        }

        box.attr('data-num', i);

    });

}

function initWorkDotsCarousel() {

    if($('.work-section .slick-dots')[0]) {

        $('.work-section .slick-dots').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 2,
            variableWidth: true
        });

    }

}