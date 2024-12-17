
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para");




async function check_weather() {
    let user_city = document.getElementById("user-city").value;
    let openWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${user_city}&appid=bce82ed816189a55b05d39603658ca2a`;
    let fet = fetch(openWeather);
    
    let jso = await fetch(openWeather);
    let data = await jso.json();
        
    console.log(user_city);
    console.log(openWeather);
    console.log(fet);
    console.log(jso);
    console.log(data);
    console.log(data.city.name);
    console.log(data.list);
    
    
    
    
    
}