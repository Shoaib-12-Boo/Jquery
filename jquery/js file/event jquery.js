$(document).ready(function(){
    $('$sname,#sclass').focus(function(){
        $(this).css('background-color','lime');
    });

    $('$sname,#sclass').blur(function(){
        $(this).css('background-color','lime');
    });
});