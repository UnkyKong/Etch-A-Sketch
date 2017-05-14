$(document).ready(function(){

var $size = $('#size').val();   

var grid = function ($size) {
    $('.square').remove();
    var $size = $('#size').val();    
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
});

grid($size);

$('.square').on('mouseenter',function(){
    $(this).css('background-color', $('#color').val());
});






});