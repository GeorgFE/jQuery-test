$(function () {
    var w = $('html').width();
    alert('ширина вашего экрана: ' + (w + 17));
    var f = prompt('введите класс обьекта размеры которого вы хотитее получить');
    $('body > header > nav > menu > li > a').fadeTo(1000, 0.1).fadeTo(2000, 1);
    var src = $('logo img').attr('src');
    alert(src);

    function widthAndHeight(element) {
        var className = "." + element;
        var w = $(className).width();
        var h = $(className).height();

        $('.mainText p').text('ширина: ' + w + 'высотоа ' + h);
        $('body > header > nav > a > img').slideUp(1999);
    }

    $('nav menu li a').animate({
        'font-size': '30px'
    }, 3000);
    widthAndHeight(f);

});