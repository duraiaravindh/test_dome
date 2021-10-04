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
    // for (var i=0; i<result.length; i++){
    //     console.log(result[i].capital+ " "+ result[i].flag);

};