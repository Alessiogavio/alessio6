
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
        
        var cont=obj.clients.length;
        for (let i=0;i<cont;i++)
        {

            var cont2 = obj.clients[i].devices.length;
            for (let j=0;j<cont2;j++)
            {
                
                //console.log(obj.clients[i].devices[j].mac.length);
                const arr =['910kcsfnt726','910kcmrnt731','001d50203ce7','001d502075af','001d50220433'];
                arr.sort();
                console.log(arr.sort());
                               
            }      
            
        }
        console.log("-------------------------");
        console.log ("  ");
 
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

        var val=0;var val2=0;
                
        ORDERED_DEVICEWS.sort(function(firstEl, secondEl) 
        {
            var i=0;
            var s1=0, s2=0;
            
            console.log("FIRSTEL");
            for (var c=0;c<firstEl.length;c++)
            {               
                if(!isNaN(firstEl[c]))
                {                   
                    //console.log('NUMBER )='+firstEl[c]);    //STAMPA PRIMO ELEMENTO
                    s1=parseInt(firstEl[c])+s1;     // RISULTATO
                }        
            }
            console.log(firstEl);
            console.log("risultato: "+Number(s1));      //STAMPA RISULTATO DI CIASCUN ELEMENTO
            console.log("   ");

            console.log("SECONDEL");
            for (var k=0; k<secondEl.length; k++)
            {
                if( !isNaN(secondEl[k]) )   //secondEl[k]!=num)
                {
                    //console.log('NUMBER )= '+secondEl[k]);      //STAMPA SECONDO ELEMENTO
                    s2 = parseInt(secondEl[k])+s2;    // RISULTATO  
                }
                          
            }
            console.log(secondEl);
            console.log("risultato: "+Number (s2));
            console.log ("  ");

            console.log("-------------------------"+"\n");

            
            if(s1>s2)
            {
                //console.log("valore :"+s1);
                return +1;
            } 
            if(s1<s2)
            {
                //console.log("valore :"+s2);
                return -1;
            }
            if(s1==s2)
            {
                //console.log("valore :"+s1);
                return 0;
            }

            
            console.log ("  "); 
            
        });console.log("MODIFICARE IN ORDINE CRESCENTE IL MAC ");
        console.log(ORDERED_DEVICEWS+"");

        var ORDINA_MAC = [];
        ORDINA_MAC.push(ORDERED_DEVICEWS);
        console.log("\n");
        
        

        //SORT DI OBJ
        console.log ("SORT DI OGGETTT","\n");


        var ORDINAOBJ=[];
    
        $.each(obj.clients,function(index,client)
        {
            
            $.each(client.devices,function(index,devices)
            {    
                ORDINAOBJ.push(devices.mac);
            });
            ORDINAOBJ.sort(function(a, b) 
            {
                
                if(a>b) return +1;
                if(a<b) return -1;
                return 0;       
            });
        });
        console.log(ORDINAOBJ+"");
        console.log("----------------------------------------");  
        console.log(""); 
        
  

        let clients = obj.clients.sort(function(a, b) {
            if (a.devices_license > b.devices_license)
                return 1;
            else if (!(a.devices_license > b.devices_license))
                return -1;
            else
                return 0;
        });
        console.log(clients);

        $("ul#client_list").empty();
        clients.forEach(client => {
            var li = $("<li></li>");
            li.append(client.client + " (" + client.devices_license + " licences)");
            $("ul#client_list").append(li);
        });

    
        
        
        $("ul#client_list").click(function(e) 
        {
            var pos = $("ul#client_list").index($(this));
            var devices = clients[pos].devices;
            console.log(devices);
            devices.forEach(function(dev)
            //clients.forEach(client =>  
            {
                console.log(dev.name);
                var li = $("<li></li>");
                li.append(dev.name + " - "+ dev.mac);
                $(".client_devices ol").append(li);
            
            
                
            
            });
        });









    });

});