$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        center: true,

    });
});


function dec_min() {
    min = parseInt($('.min').html())
    if (min !== 0) {
        $('.min').html(min - 1);
        $('.sec').html(59)
    }
}

function dec_sec() {
    sec = parseInt($('.sec').html())
    if (sec !== 0) {
        $('.sec').html(sec - 1);
        $('.msec').html(9)
    } else {
        dec_min();
    }
}

$(function () {
    var Update = function () {
        $('.msec').each(function () {
            var count = parseInt($(this).html());
            if (count != 0) {
                $(this).html(count - 1)
            } else {
                dec_sec();
            }
        })
    }
    setInterval(Update, 100)
})

$('[type=text]').on('focus',
    function () {
        $('.nameq').css('display', 'block');

    }
);

$('[type=number]').on('focus',
    function () {
        $('.numberq').css('display', 'block');
    }
);


$('button').on('click',
    function () {
        $('html, body').animate({
            scrollTop: $(".formwrap").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    })



