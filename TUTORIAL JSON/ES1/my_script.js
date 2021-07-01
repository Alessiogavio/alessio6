$("button").click (function()
{

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) 
    {
        console.log(obj);            


            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC --MOD.1
            $.each(obj.clients,function(index, client)
            {        
                    
                console.info(client.client);
                $.each(client.devices,function(index, device)  
                {
                    console.info('  '+device.mac);
                });
                
            });
            console.info("-------------------------------------");

            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC --MOD.2
            obj.clients.forEach(function(client)
            {
                console.info(client.client);
                client.devices.forEach(function(device)
                {
                    console.info(device.mac)
                });

            });
            console.info("-------------------------------------");














            /*        
            //CICLO FOR STAMPA TUTTI I CLIENTS
            obj.clients.forEach(function(obj) 
            {                                 
                console.log(obj.client)                          
            });               
            */
            
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