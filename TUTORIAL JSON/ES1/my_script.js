$("button").click (function()
{

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) 
    {
        console.log(obj);            


            //STAMPA UN SOLO VALORE
            $.each(obj.clients,function(index, client)
            {        
                    
                console.info(client.client);
                $.each(client.devices,function(index, device)  
                {
                    console.info('  '+device.mac);
                });
            });

            /*
            var $ul=$("<ul></ul>");
            
            //CICLO FOR STAMPA TUTTI I CLIENTS
            obj.clients.forEach(function(obj) 
            {
                
                $ul.append("<li>"+obj.clients+"</li>");
                    
                console.log(obj.client)                          
            });
               
            */
            
            
            
            
            
            // $("ul").append("<li>"+value.name+"</li>");            

            //document.writeln(parsed.clients);
             //

             /*
                var lista =obj.clients.querySelectorAll("li");
                for(){
                    lista[i].addEventListener("mouseover",function(){
                        this.classList.add("selezione");
                    });
                    lista[i].addEventListener("mouseover",function(){
                        this.classList.add("selezione");
                    });
                    lista[i].addEventListener("click",function(){
                        this.classList.toggle("fatto");
                    });
                }*/
    });
});