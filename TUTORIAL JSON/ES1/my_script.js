$("button").click (function(){

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) {
        console.log(obj);    
        
        //let parsed = JSON.parse(utente);
        //console.log(parsed.clients.client);
        $.each(obj.clients,function(key,value)
        {            
            console.log(obj.clients[0].client);
            //let parsed = JSON.parse(utente);
            //console.log (parsed);
           // $("ul").append("<li>"+value.name+"</li>");
        });
        //document.writeln(parsed.clients);
    const clients 
    for(let i=0; i<clients.lenght;i++)
    {
        console.log(clients[i])
    }
    });
    /*
    <script>
        
    </script>*/
    
});