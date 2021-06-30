$("button").click (function(){

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) {
        console.log(obj);
        $.each(obj,function(key,value){
            $("ul").append("<li>"+value.name+"</li>");
        });

    });
});