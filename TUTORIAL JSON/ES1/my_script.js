$("button").click (function()
{

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) 
    {
        console.log(obj);            

            console.log ("MOD:1");
            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC --MOD.1
            $.each(obj.clients,function(index, client)
            {        
                    
                console.info(client.client);
                $.each(client.devices,function(index, device)  
                {
                    console.info('  -'+device.mac);
                });
                
            });
            console.info("-------------------------------------");

            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC --MOD.2
            console.log ("MOD:2");
            obj.clients.forEach(function(client)
            {
                console.info(client.client);
                client.devices.forEach(function(device)
                {
                    console.info('  -'+device.mac)
                });

            });
            console.info("-------------------------------------");

            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC --MOD.3
            console.log ("MOD:3");
            
              for (let i=0;i<3;i++)
              {
                console.info(obj.clients[i]);
                console.info(obj.clients.device);
              }

              for(var i=0;i<obj.clients;i++)
              {
                  console.info(obj.client[i]);
              }
              


            
    });
});