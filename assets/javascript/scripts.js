// SCRIPTS TO CONTROL EXPANDING MENUS

$("#eat").click(function(){
    $("#places-to-see").hide();
    $("#places-to-stay").hide();
    $("#places-to-eat").hide().show();
});

$("#see").click(function(){
    $("#places-to-eat").hide();
    $("#places-to-stay").hide();
    $("#places-to-see").hide().show();
});

$("#stay").click(function(){
    $("#places-to-eat").hide();
    $("#places-to-see").hide();
    $("#places-to-stay").hide().show();
});