// step:1 - create the XHR Object / constructor
var req = new XMLHttpRequest();

//step:2 - Open a connection (3 Parameters)
req.open("GET","https://restcountries.com/v3/all",true)

// step:3 - Initiate a connection (give req to server)
req.send();

//setp:4 once the data loaded from the server successfully
req.onload=function(){
    // here we are converting string to JSON object
    var result = JSON.parse(req.response);
    console.log(result);
    for (var i=0; i<result.length; i++){
    //     console.log(result[i].capital+ " "+ result[i].flag);
    try{
        var name=result[i].name;
        var latlon = result[i].latlng;
        if(latlon.length === 0){
            throw new Error("Invalid coordiantes for the county");
            weatherdata(name,...latlon)
        }
        catch(e){
            console.log("Invalid country"+name+e.message);
        }
        }
        function weatherdata(name,lat,long){
        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a880101b261506eae27af5c9f8851d4e`
        var request = new XMLHttpRequest();
        request.open('GET',url,true);
        request.send();
        request.onload=function(){
            var data=JSON.parse(request.response);
            console.log(`${name}:${data.main.temp}`);
        }
    }
    }
    }
};