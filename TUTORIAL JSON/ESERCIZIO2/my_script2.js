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
 
        //MODIFICARE IN ORDINE CRESCENTE IL MAC
        console.log("MODIFICARE IN ORDINE CRESCENTE IL MAC");
        var ORDERED_DEVICEWS = [];
        var new_type=[];
        var new_name=[];
        var new_client=[];
        var DEVICESFULL = [];

        console.log("type    mac            name          client");
        $.each(obj.clients,function(index,client)
        {
            
            $.each(client.devices,function(index,devices)
            {               
                ORDERED_DEVICEWS.push(devices.mac);
                new_type.push(devices.type);
                new_name.push(devices.name);
                new_client.push(client.client);

                DEVICESFULL[devices.mac] = {
                    type: devices.type,
                    name: devices.name,
                    client: client.client
                    
                };
                
                console.log(DEVICESFULL[devices.mac]);
                
            });
            

            
        });
        console.log("-------------------------");
        console.log ("  ");

        var tot1=0;var tot2=0;
        ORDERED_DEVICEWS.sort(function(firstEl, secondEl) {
            var s1=0;
            var s2=0; 
            
            var str=ORDERED_DEVICEWS;
            var n=parseInt(str);
            var num=Number(n);
            console.log("FIRSTEL");
            for (var c=0;c<firstEl.length;c++)
            {
                
                if(!isNaN(firstEl[c]))
                {
                    console.log('NUMBER )='+firstEl[c]);
                    s1=parseInt(firstEl[c])+s1;
                    tot1 = parseInt(firstEl[c])+tot1;
                }
                else{
                    //console.log('NOT NUMBER )= '+firstEl[c]);
                }
                
            }
            console.log("risultato: "+Number(s1));
            console.log("   ");



            console.log ("  ");
            console.log("SECONDEL");
            for (var k=0; k<secondEl.length; k++)
            {
                if( !isNaN(secondEl[k]) )   //secondEl[k]!=num)
                {
                    console.log('NUMBER )= '+secondEl[k]);
                    s2 = parseInt(secondEl[k])+s2;
                    tot2 = parseInt(secondEl[k])+tot2;
                }
                else
                {
                    //console.log('NOT NUMBER = '+secondEl[k]);
                }
                
            }
            console.log("risultato: "+Number (s2));
            console.log ("  ");

          
        });
        console.log("totale 1° elemento: "+Number (tot1));
        console.log("totale 2° elemento: "+Number (tot2));
        console.log("   ");
        if(tot1>tot2)
        {
            console.log("primo elemento più grande");
        }
        else{
            if(tot1<tot2)
            {
                console.log("secondo elemento più grande");
            }
        }
        if(tot1==tot2)
        {
            console.log("primo e secondo elemento uguali");
        }

        console.log("-------------------------");
        
       
        
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        /*
        console.log(DEVICESFULL);
        

        DEVICESFULL.sort();
        
        
        console.log("-------------------------");
        console.log ("  ");
        console.log("type      mac              name          client");
        for (let j=0;j<5;j++)
        {
                
            //console.log(ORDERED_DEVICEWS[j],"    ");
            //console.log(devices.type, " - "+ORDERED_DEVICEWS[j]," - ",devices.name," - ",client.client);
            
            
            console.info(new_type[j],' -  '+ORDERED_DEVICEWS[j],' -  '+new_name[j],' -  '+new_client[j]);
                  
        }*/
                        
    });
});