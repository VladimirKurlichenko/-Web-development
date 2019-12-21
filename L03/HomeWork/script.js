let varible = 1234;

varible = 3232;

let number = 213;
let string = 'string';
let boolean = true;
let array = [12, 're', false];
let object = {12: 'srting', 'dss': 12, 12: [21,'wqd']};

function name(str, int) {
    let number;
}

name(string, 123);

//$('header > nav').css('background',';
$('header > nav').click(function(){
   // console.log(this);
   // $('header > nav > a').css('color','red');
  // $(this).children('a').css('color', 'red')
});


$('main > h1').click(function(){
    $('main > section.text').toggle(2000, function(){
    });
});

$('main > div.questions > div.first > div.qt').click(function(){
    $(this).next().slideDown(1000);
    
});

$('main > div.questions > div.first > div.qt').click(function(){
    $(this).next().slideUp(1000);
});

if()