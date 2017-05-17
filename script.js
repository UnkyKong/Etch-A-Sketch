$(document).ready(function(){

var $brush = $('.pad').on('mouseenter','.square',function(){
        $(this).css('background-color', $('#color').val());
});

var $size = $('#size').val();   
var shade = 255;

var grid = function ($size) {
    $('.square').remove();    
    var wide = (500 / $size)+'px';
    var tall = (400 / $size)+'px';
    var $square = $("<div />", {
    class: 'square',
    css: { "width": wide, "height": tall}
    });
    for( var i = 0; i< $size*$size; i++){
        $(".pad").append(($square).clone());
    }
    }

$('#size').on('change', function(){
    $('#pen').val($('#size').val());
    $size = $('#size').val();    
    grid($size);
});

$('#pen').on('keyup', function(){
    if($('#pen').val()>64) {
        alert("please choose a number between 1 and 64");
        $('#pen').val(64);
        $('#size').val($('#pen').val())
    }
    else {$('#size').val($('#pen').val())          
}
 grid($('#pen').val());  
});

$brush



$('input#color').click(function(){
    $('.pad').on('mouseenter','.square',function(){
        $(this).css('background-color', $('#color').val());
});
});



$('button#reset').click(function(){
    $('.square').css('background-color','white');
});

$('button.random_color').click(function(){
   $('.pad').on('mouseenter','.square',function(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var color = 'rgb('+r+', '+g+', '+b+')';
    $(this).css('background-color', color);

});
});

console.log (shade)
$('button.greyscale').click(function(){
    var shade = 255;
   $('.pad').on('mouseenter','.square',function(){
    console.log (shade)
    if (shade = 0){
            shade = 255;
        }
        else {
            shade = shade -5
        }
        console.log (shade)
    var grey = 'rgb('+shade+', '+shade+', '+shade+')';
    console.log(grey)
    $(this).css('background-color', grey);
    console.log (shade)
});
});


grid($size);



});