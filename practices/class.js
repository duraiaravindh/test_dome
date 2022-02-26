function myfunc(){
    let elem = document.getElementById("myTable");
    let row = elem.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();
    let cell7 = row.insertCell();
    let cell8 = row.insertCell();
    cell1.innerHTML = document.getElementById("first-name").value;
    cell2.innerHTML = document.getElementById("last-name").value;
    cell3.innerHTML = document.getElementById("address").value;
    cell4.innerHTML = document.getElementById("pincode").value;
    cell5.innerHTML = document.getElementById("gender").value;
    cell6.innerHTML = document.getElementById("food").value;
    cell7.innerHTML = document.getElementById("state").value;
    cell8.innerHTML = document.getElementById("country").value;

     document.getElementById("first-name").value="";
     document.getElementById("last-name").value="";
     document.getElementById("address").value="";
     document.getElementById("pincode").value="";
     document.getElementById("gender").value="";
     document.getElementById("food").value="";
     document.getElementById("state").value="";
     document.getElementById("country").value="";
};