$('main > h1').click(function(){
    $('main > section.text').toggle(2000, function(){
    });
});

$('main > div.information > div.questions > div.qt').click(function () {
    if($(this).next().css('display') == 'none') {
        $(this).next().slideDown(1000);
    } else if($(this).next().css('display') == 'block') {
        $(this).next().slideUp(1000);
    }
});