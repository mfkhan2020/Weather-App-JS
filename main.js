
let main_data_container = document.getElementById("main-data-container");
let heading_1 = document.getElementById("city-heading");
let data_container = document.getElementById("data-container");

// This is the main function to execute the weather when press the button to view weather
async function check_weather() {
    
    main_data_container.innerHTML = "";
    
    let user_city = document.getElementById("user-city").value;
    let APIKey = "52ffcaef33c3c5a347f4cc4f6c707f4a"
    let openWeather = `https://api.openweathermap.org/data/2.5/weather?q=${user_city}&appid=${APIKey}&units=metric`;
   
    let fetched_weather_data = await fetch(openWeather);
    let weather_data = await fetched_weather_data.json();
        
    let icon_code = weather_data.weather[0].icon
    
    let subData_Container = document.createElement("div")
    subData_Container.setAttribute("id", "subdiv_1")

    let cityNameHeading = document.createElement("h1");
    cityNameHeading.setAttribute("id", "cityNameHeading")
    cityNameHeading.innerText = weather_data.name;
            
    let label_para1 = document.createElement("label");
    label_para1.innerHTML = "Current Temprature : "
    let para_1 = document.createElement("p");              
    para_1.innerText = weather_data.main.temp;
            
    let label_para2 = document.createElement("label");  
    label_para2.innerHTML = "Condition : "
    let para_2 = document.createElement("p");
    para_2.innerHTML = weather_data.weather[0].main

    let label_para3 = document.createElement("label");  
    label_para3.innerHTML = "Description : "
    let para_3 = document.createElement("p");
    para_3.innerHTML = weather_data.weather[0].description;

    let label_para4 = document.createElement("label");  
    label_para4.innerHTML = "Humidity : "
    let para_4 = document.createElement("p");
    para_4.innerHTML = weather_data.main.humidity;

    let label_para5 = document.createElement("label");  
    label_para5.innerHTML = "Feels Like : "
    let para_5 = document.createElement("p");
    para_5.innerHTML = weather_data.main.feels_like;

    let label_para6 = document.createElement("label");  
    label_para6.innerHTML = "Min Temprature : "
    let para_6 = document.createElement("p");
    para_6.innerHTML = weather_data.main.temp_min;

    let label_para7 = document.createElement("label");  
    label_para7.innerHTML = "Min Temprature : "
    let para_7 = document.createElement("p");
    para_7.innerHTML = weather_data.main.temp_max;

    let label_img1 = document.createElement("label")
    label_img1.innerHTML = "Weather Icon : "
    let img1 = document.createElement("img");
    img1.src = `http://openweathermap.org/img/wn/${icon_code}.png`

    main_data_container.appendChild(subData_Container);
    
    subData_Container.appendChild(cityNameHeading);

    subData_Container.appendChild(label_para1);
    label_para1.appendChild(para_1);
    
    subData_Container.appendChild(label_para2);
    label_para2.appendChild(para_2);
    
    subData_Container.appendChild(label_para3);
    label_para3.appendChild(para_3);
    
    subData_Container.appendChild(label_para4);
    label_para4.appendChild(para_4);
    
    subData_Container.appendChild(label_para5);
    label_para5.appendChild(para_5);
    
    subData_Container.appendChild(label_para6);
    label_para6.appendChild(para_6);
    
    subData_Container.appendChild(label_para7);
    label_para7.appendChild(para_7);
    
    subData_Container.appendChild(label_img1);
    label_img1.appendChild(img1);
}
// Check_Weather function end

// This Function is used to add favourite weather in a div container
async function add_weather() {
    
    let user_city = document.getElementById("user-city").value;
    let APIKey = "52ffcaef33c3c5a347f4cc4f6c707f4a"
    let openWeather = `https://api.openweathermap.org/data/2.5/weather?q=${user_city}&appid=${APIKey}&units=metric`;
   
    let fetched_weather_data = await fetch(openWeather);
    let weather_data = await fetched_weather_data.json();
        
    let icon_code = weather_data.weather[0].icon
    
    let subData_Container = document.createElement("div")
    subData_Container.setAttribute("id", "subdiv_1")

    let del_btn = document.createElement("button");
    del_btn.setAttribute("id", "del-btn")
    del_btn.innerText = "X";
    del_btn.onclick = function() {main_data_container.removeChild(subData_Container)}

    let cityNameHeading = document.createElement("h1");
    cityNameHeading.setAttribute("id", "cityNameHeading")
    cityNameHeading.innerText = weather_data.name;
            
    let label_para1 = document.createElement("label");
    label_para1.innerHTML = "Current Temprature : "
    let para_1 = document.createElement("p");              
    para_1.innerText = weather_data.main.temp;
            
    let label_para2 = document.createElement("label");  
    label_para2.innerHTML = "Condition : "
    let para_2 = document.createElement("p");
    para_2.innerHTML = weather_data.weather[0].main

    let label_para3 = document.createElement("label");  
    label_para3.innerHTML = "Description : "
    let para_3 = document.createElement("p");
    para_3.innerHTML = weather_data.weather[0].description;

    let label_para4 = document.createElement("label");  
    label_para4.innerHTML = "Humidity : "
    let para_4 = document.createElement("p");
    para_4.innerHTML = weather_data.main.humidity;

    let label_para5 = document.createElement("label");  
    label_para5.innerHTML = "Feels Like : "
    let para_5 = document.createElement("p");
    para_5.innerHTML = weather_data.main.feels_like;

    let label_para6 = document.createElement("label");  
    label_para6.innerHTML = "Min Temprature : "
    let para_6 = document.createElement("p");
    para_6.innerHTML = weather_data.main.temp_min;

    let label_para7 = document.createElement("label");  
    label_para7.innerHTML = "Min Temprature : "
    let para_7 = document.createElement("p");
    para_7.innerHTML = weather_data.main.temp_max;

    let label_img1 = document.createElement("label")
    label_img1.innerHTML = "Weather Icon : "
    let img1 = document.createElement("img");
    img1.src = `http://openweathermap.org/img/wn/${icon_code}.png`

    main_data_container.appendChild(subData_Container);
    
    subData_Container.appendChild(del_btn);

    subData_Container.appendChild(cityNameHeading);

    subData_Container.appendChild(label_para1);
    label_para1.appendChild(para_1);
    
    subData_Container.appendChild(label_para2);
    label_para2.appendChild(para_2);
    
    subData_Container.appendChild(label_para3);
    label_para3.appendChild(para_3);
    
    subData_Container.appendChild(label_para4);
    label_para4.appendChild(para_4);
    
    subData_Container.appendChild(label_para5);
    label_para5.appendChild(para_5);
    
    subData_Container.appendChild(label_para6);
    label_para6.appendChild(para_6);
    
    subData_Container.appendChild(label_para7);
    label_para7.appendChild(para_7);
    
    subData_Container.appendChild(label_img1);
    label_img1.appendChild(img1);
}

// Toggle Button Function
let toggleCheckbox = document.getElementById('toggleCheckbox');

toggleCheckbox.addEventListener('change', () => {
  
  if (toggleCheckbox.checked) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
});

// Login Modal start
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("login-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Login Modal end

// Signup Modal start
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("signup-btn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
// Signup Modal end