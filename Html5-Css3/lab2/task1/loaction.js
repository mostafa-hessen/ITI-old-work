let LinkElement=document.getElementById('location')
let latitude;
let longitude;
navigator.geolocation.getCurrentPosition(function (pos) { 
    console.log("“Latitude”", pos.coords.latitude); 
    console.log("Longitude", pos.coords.longitude);

    // LinkElement.setAttribute('href',`https://www.google.com/maps/@${pos.coords.latitude}.${ pos.coords.longitude}`)
    latitude=pos.coords.latitude;
    longitude=pos.coords.longitude

 });
console.log(LinkElement);
 LinkElement.setAttribute('href',`https://www.google.com/maps/@${latitude}.${ longitude}`)
