$(document).ready(function(){

$('#size').on('change', function(){
    $('#pen').val($('#size').val());
});

$('#pen').on('keyup', function(){
    if($('#pen').val()>68) {
        alert("please choose a number between 1 and 68");
        $('#pen').val(68);
        $('#size').val($('#pen').val())
    }
    else {$('#size').val($('#pen').val())
    }
});
});