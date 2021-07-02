$("button").click (function()
{

    $.getJSON( "http://local.voome.tv/hmp-finder/alessio.json",function(obj) 
    {
        console.log(obj);  

        $.each(obj.clients,function(index,client)
        {
            
            $.each(client.devices,function(index,devices)
            {

                console.info('  -'+devices.mac);
                console.info('  -'+devices.type);
                console.info('  -'+devices.name);
            });
            console.info(client.client);
        });
        console.log ("  ");
        console.log("-------------------------");
        console.log ("  ");

        console.log("  mac            type    name          client");
        $.each(obj.clients,function(index,client)
        {
            
            $.each(client.devices,function(index,devices)
            {               
                console.info('  -'+devices.mac, ' -'+devices.type, ' -'+devices.name, ' -'+client.client);
            });
        });



    });
});