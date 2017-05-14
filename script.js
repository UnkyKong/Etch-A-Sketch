$(document).ready(function(){

var $size = $('#size').val();
var wide = (500 / $size)+'px'
var tall = (400 / $size)+'px'
var $square = $("<div />", {
    class: 'row',
    css: { "width": wide, "height": tall}
});
var grid = function ($size) {
    for( var i = 0; i<= 500; i+=$size){
        for (var j = 0; j <= 400; j+=$size) {
        $(".pad").append($square);
        }
    }
     $(".pad").append($('br'));
}

$('#size').on('change', function(){
    $('#pen').val($('#size').val());
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








});