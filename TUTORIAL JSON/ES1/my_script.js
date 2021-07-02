$("button").click (function()
{

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) 
    {
        console.log(obj);            
            console.log("TROVARE CLIENT E MAC ")
            console.log("   ");
            console.log ("mod:1");
            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC --MOD.1
            $.each(obj.clients,function(index, client)
            {        
                    
                console.info(client.client);
                $.each(client.devices,function(index, device)  
                {
                    console.info('  -'+device.mac);
                });                
            });
            console.log("   ");

            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC --MOD.2
            console.log ("mod:2");
            obj.clients.forEach(function(client)
            {
                console.info(client.client);
                client.devices.forEach(function(device)
                {
                    console.info('  -'+device.mac)
                });

            });
            

            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI MAC CON CICLO FOR --MOD.3
            console.log("   ");
            console.log ("mod:3");

                //console.log(obj.clients.length)--> lunghezza array

            var edson = obj.clients.length;
            
              for (let i=0;i<edson;i++)
              {
                console.log(obj.clients[i].client)

                var matteo = obj.clients[i].devices.length;
                for(let j=0;j<matteo;j++)
                {
                    console.log('  -'+obj.clients[i].devices[j].mac);
                }                
              }
                       

            console.info("-------------------------------------");
            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI NAME --MOD.1
            console.log ("TROVARE CLIENT E NAME ");
            console.log("   ");
            console.log ("mod:1");            
            $.each(obj.clients,function(index,client)
            {
                console.info(client.client);
                $.each(client.devices,function(index,device)
                {
                    console.info('  -'+device.name);
                });
            });

            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI NAME --MOD.2
            console.log("   ");
            console.log ("mod:2");
            obj.clients.forEach(function(client)
            {
                console.info(client.client);
                client.devices.forEach(function(devices)
                {
                    console.info('  -'+devices.name);
                })
            })

            //STAMPA TUTTI I CLIENTS E I CORRISPONDENTI NAME CON CICLO FOR --MOD.3
            console.log("   ");          
            console.log ("mod:3");
             var pippo=obj.clients.length;
             for (var i=0;i<pippo;i++)
             {
                 console.log(obj.clients[i].client);
                 var cont=obj.clients[i].devices.length;
                 for (var j=0;j<cont;j++)
                 {
                     console.log ('  -'+obj.clients[i].devices[j].name);
                 }
             }

            console.info("-------------------------------------");
            //STAMPA TUTTI I CLIENT CON I DEVICE_LICENSE E I CORRISPONDENTI ACTIVATION --MOD.1
            console.log ("TROVARE CLIENT, DEVICE_LICENSE E ACTIVATION ");
            console.log("   ");          
            console.log ("mod:1");
            $.each(obj.clients,function(index,client)           
            {
                console.info(client.client);
                console.info('  ='+client.devices_license);
                
                $.each(client.devices,function(index,device)
                {
                    console.info('      -'+device.activation);                
                });  
                    
            });



            //STAMPA TUTTI I CLIENT CON I DEVICE_LICENSE E I CORRISPONDENTI ACTIVATION --MOD.1
            console.log("   ");          
            console.log ("mod:2");
            obj.clients.forEach(function(client)
            {
                console.info(client.client);
                console.info('  ='+client.devices_license);
                
                client.devices.forEach(function(device)
                {
                    console.info('      -'+device.activation);
                })
                
            })


            //STAMPA TUTTI I CLIENT CON I DEVICE_LICENSE E I CORRISPONDENTI ACTIVATION CON CICLO FOR --MOD.1
            console.log("   ");          
            console.log ("mod:3");
            
            var cont1= obj.clients.length;
            for(var i=0;i<cont1;i++)
            {
                console.log(obj.clients[i].client);
                console.log('   ='+obj.clients[i].devices_license);

                var cont2=obj.clients[i].devices.length;
                for(var  j=0;j<cont2;j++)
                {
                    console.log('       -'+obj.clients[i].devices[j].activation);
                }
            }







    });
});

