
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
        console.log ("sort di oggetti","\n");








        var ORDINAOBJ=[];
    
        $.each(obj.clients,function(index,client)
        {
            
            $.each(client.devices,function(index,devices)
            {    
                ORDINAOBJ.push(devices.mac);
            });
            ORDINAOBJ.sort(function(primo, secondo) 
            {
                return primo.mac-secondo.mac;

                /*
                var m1=0;m2=0;
                for(var i=0;i<ORDINAOBJ;i++)
                {
                    if(!isNaN(primo[i]))
                    {                   
                        console.log('NUMBER )='+primo[i]);  
                        m1=parseInt(primo[i])+m1;     
                    }
                }
                console.log(primo);
                console.log("risultato: "+Number(m1));      //STAMPA RISULTATO DI CIASCUN ELEMENTO
                console.log("\n");*/
                
            });
        });
        
                    
            let arr =['910kcsfnt726','910kcmrnt731','001d50203ce7','001d502075af','001d50220433'];
            var ris=0;
            arr.sort(function(a,b)
            {   
                
                /*for(var p=0;p<a;p++)
                {
                    if(!isNaN(a[p]))
                    {
                        ris=parseInt(a[p])+ris;
                    }
                    
                }*/
                if(a>b) 
                return +1;
                if(a<b) 
                return -1;
                return 0;

                

            });
            //console.log(ris);
            console.log(arr);                            
            
            

});
});