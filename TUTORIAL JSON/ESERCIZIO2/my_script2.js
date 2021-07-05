$("button").click (function()
{

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) 
    {
        console.log(obj);  

        console.log("-------------------------");
        console.log ("  ");

        console.log("type    mac            name          client");
        $.each(obj.clients,function(index,client)
        {
            
            $.each(client.devices,function(index,devices)
            {               
                console.info('-'+devices.type, ' -'+devices.mac, ' -'+devices.name, ' -'+client.client);
            });
        });
        console.log("-------------------------");
        console.log ("  ");
        /*
        var cont=obj.clients.length;
        for (let i=0;i<cont;i++)
        {

            var cont2 = obj.clients[i].devices.length;
            for (let j=0;j<cont2;j++)
            {
                
                console.log(obj.clients[i].devices[j].mac.length);
                const arr =['910kcsfnt726','910kcmrnt731','001d50203ce7','001d502075af','001d50220433'];
                arr.sort();
                console.log(arr.sort());
                               
            }
        
            
        }*/


        var ORDERED_DEVICEWS = [];
        var new_type=[];
        var new_name=[];
        var new_client=[];

        console.log("type    mac            name          client");
        $.each(obj.clients,function(index,client)
        {
            
            $.each(client.devices,function(index,devices)
            {               
                ORDERED_DEVICEWS.push(devices.mac);
                new_type.push(devices.type);
                new_name.push(devices.name);
                new_client.push(client.client);
                ORDERED_DEVICEWS.sort() 
                //console.log(devices.type," - "+devices.mac," - "+ devices.name," - "+client.client);
            });
            
        });
        console.log(ORDERED_DEVICEWS);
        console.log("-------------------------");
        console.log ("  ");
        
        for (let j=0;j<5;j++)
        {
                
            //console.log(ORDERED_DEVICEWS[j],"    ");
            //console.log(devices.type, " - "+ORDERED_DEVICEWS[j]," - ",devices.name," - ",client.client);
            
            
            console.info(new_type[j], ' - '+ORDERED_DEVICEWS[j], ' - '+new_name[j], ' - '+new_client[j]);
                  
        }
            
       
        
    });
});