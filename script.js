$(document).ready(function(){

var $size = $('#size').val();
var wide = (500 / $size)+'px'
var tall = (400 / $size)+'px'
var $square = $("<div />", {
    class: 'row',
    css: { "width": wide, "height": tall}
});
var grid = function ($size) {
    for( var i = 0; i<= 500; i+$size){
        $square.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i <= 500; i+$size) {
        $(".pad").append($square.clone());
    }
    }

$('#size').on('change', function(){
    $('#pen').val($('#size').val());
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