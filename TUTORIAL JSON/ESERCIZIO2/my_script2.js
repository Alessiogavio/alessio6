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
            var i=0;
            var s1=0, s2=0;
            var str=ORDERED_DEVICEWS;
            var n=parseInt(str);
            var num=Number(n);
            console.log("FIRSTEL");
            for (var c=0;c<firstEl.length;c++)
            {
                
                if(!isNaN(firstEl[c]))
                {
                    
                    console.log('NUMBER )='+firstEl[c]);    //STAMPA PRIMO ELEMENTO
                    s1=parseInt(firstEl[c])+s1;     // RISULTATO
                    tot1 = parseInt(firstEl[c])+tot1;   // SOMMA TOT DEL PRIMO ELEMENTO

                }
                else{
                    //console.log('NOT NUMBER )= '+firstEl[c]);     //STAMPA CARATTERI ALFABETICI
                }
                
            }
            console.log("risultato: "+Number(s1));      //STAMPA RISULTATO DI CIASCUN ELEMENTO
            console.log("   ");

            


            console.log ("  ");
            console.log("SECONDEL");
            for (var k=0; k<secondEl.length; k++)
            {
                if( !isNaN(secondEl[k]) )   //secondEl[k]!=num)
                {
                    console.log('NUMBER )= '+secondEl[k]);      //STAMPA SECONDO ELEMENTO
                    s2 = parseInt(secondEl[k])+s2;    // RISULTATO  
                    tot2 = parseInt(secondEl[k])+tot2;      //SOMMA TOTALE DEL SECONDO ELEMENTO
                }
                else
                {
                    //console.log('NOT NUMBER = '+secondEl[k]);     //STAMPA I CARATTERI ALFABETICI
                }
                
            }
            console.log("risultato: "+Number (s2));
            console.log ("  ");
            //CONFRONTO SERIE DI RISULTATI PRIMO ELEMENTO CON SECONDO ELEMENTO
       
            if(s1>s2)
            {
                console.log("S1",c,"elemento è più grande di S2" ,k ,"elemento ---> S1 ("+s1+"); S2 ("+s2+")");
            }
            else{
                if(s1<s2)
                {
                    console.log("S2",c,"elemento è più grande di S1" ,k ," elemento ---> S1 ("+s1+"); S2 ("+s2+")");
                }
            }
            if(s1==s2)
            {
                console.log("S1",c, "elemento è uguale a S2" ,k ,"elemento ---> S1 ("+s1+"); S2 ("+s2+")");
            }
        
        
        console.log ("  ");

          
        });

        //CONFORNTO TOT PRIMO ELEMENTO COON TOT SECONDO ELEMENTO
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