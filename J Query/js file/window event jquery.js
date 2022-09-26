$(document).ready(function(){
    $('#box').scroll(function(){
        console.log("You are Scrolling");
    });

    $(window).resize(function(){
        console.log("You are resizing window");
    });
});