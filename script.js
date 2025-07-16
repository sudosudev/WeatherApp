document.addEventListener("DOMContentLoaded", () => {
  const weatherApi = {
    key: 'your_api_key_here',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

let searchBoxElement = document.getElementsByClassName("search-bar")[0]
let weatherdata, timeSpec;
let today = new Date();
let curHr = today.getHours();
let weatherData=null;
if(curHr > 17){
    backGroundScene = "Assets/img/mountain2.png"
}else{
    backGroundScene="Assets/img/mountain.jpg"
}
document.getElementById("img_scn").setAttribute("src",backGroundScene);
//adding the event listener on search bar element
try {
    searchBoxElement.addEventListener("keydown", (event)=>{
    if(event.key==="Enter"){
        document.getElementById("weather_result_container").innerHTML = ""; // Hide grid before response
        let city = searchBoxElement.value;
        fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then((response)=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error("City Not Found");
            }
        }).then((weatherData)=>{
            let resultContainer = document.getElementById("weather_result_container");
            resultContainer.style.display = "grid";
            resultContainer.style.visibility = "visible";
            document.getElementById("search-bar").value = "";
            document.getElementById("search-bar").blur();
            document.getElementById("search-bar").style.border = "none";
            document.getElementById("search-bar").style.boxShadow = "none";
            document.getElementById("search-bar").style.backgroundColor = "transparent";

            // Set place and time outside the grid
            let formattedDateString = new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });

            // Only weather rows in the grid
            resultContainer.innerHTML = `
    <div class="weather_row">
        <span class="weather_value">${weatherData.name}, ${weatherData.sys.country}</span>
    </div>
    <div class="weather_row">
        <span class="weather_value">${formattedDateString}</span>
    </div>
    <br><br>
    <div class="weather_row">
        <span class="weather_svg_span">
            <!-- Thermometer SVG for Feels Like -->
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21">
                <title>Feels Like</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.125 11.287V4.25a2.5 2.5 0 1 0-5 0v7.037a4.375 4.375 0 1 0 5 0ZM5.625 3a1.25 1.25 0 0 1 1.25 1.25v4.375h-2.5V4.25A1.25 1.25 0 0 1 5.625 3Zm0 15a3.125 3.125 0 0 1-1.563-5.831l.313-.175V9.875h2.5v2.119l.313.175A3.125 3.125 0 0 1 5.625 18ZM18.75 3H12.5v1.25h6.25V3ZM12.5 6.75h4.375V8H12.5V6.75Zm6.25 3.75H12.5v1.25h6.25V10.5Zm-6.25 3.75h4.375v1.25H12.5v-1.25Z" fill="currentColor"></path>
            </svg>
        </span>
        <span class="weather_text"><strong>Feels Like:</strong></span>
        <span class="weather_value">${weatherData.main.feels_like} °C</span>
    </div>
    <div class="weather_row">
        <span class="weather_svg_span">
            <!-- Temperature SVG -->
            <svg name="temperature" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21">
                <title>Temperature</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.125 11.287V4.25a2.5 2.5 0 1 0-5 0v7.037a4.375 4.375 0 1 0 5 0ZM5.625 3a1.25 1.25 0 0 1 1.25 1.25v4.375h-2.5V4.25A1.25 1.25 0 0 1 5.625 3Zm0 15a3.125 3.125 0 0 1-1.563-5.831l.313-.175V9.875h2.5v2.119l.313.175A3.125 3.125 0 0 1 5.625 18ZM18.75 3H12.5v1.25h6.25V3ZM12.5 6.75h4.375V8H12.5V6.75Zm6.25 3.75H12.5v1.25h6.25V10.5Zm-6.25 3.75h4.375v1.25H12.5v-1.25Z" fill="currentColor"></path>
            </svg>
        </span>
        <span class="weather_text"><strong>Temperature:</strong></span>
        <span class="weather_value">${weatherData.main.temp} °C</span>
    </div>
    <div class="weather_row">
        <span class="weather_svg_span">
            <!-- Wind SVG -->
            <svg name="wind" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21">
                <title>Wind Speed</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.875h8.125A3.125 3.125 0 1 0 10 6.75h1.25a1.875 1.875 0 1 1 1.875 1.875H5v1.25Zm7.166 7.209a3.125 3.125 0 1 0 2.209-5.334H2.5V13h11.875a1.875 1.875 0 1 1-1.875 1.875h-1.25c0 .829.33 1.623.916 2.209Z" fill="currentColor"></path>
            </svg>
        </span>
        <span class="weather_text"><strong>Wind Speed:</strong></span>
        <span class="weather_value">${weatherData.wind.speed} m/s</span>
    </div>
    <div class="weather_row">
        <span class="weather_svg_span">
            <!-- Humidity SVG -->
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21">
                <title>Humidity</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.5C7 8.5 4 11.5 4 14.5a6 6 0 0 0 12 0c0-3-3-6-6-11Zm0 15a4.5 4.5 0 0 1-4.5-4.5c0-2.2 2.2-4.7 4.5-8.2 2.3 3.5 4.5 6 4.5 8.2A4.5 4.5 0 0 1 10 18.5Z" fill="currentColor"></path>
            </svg>
        </span>
        <span class="weather_text"><strong>Humidity:</strong></span>
        <span class="weather_value">${weatherData.main.humidity}%</span>
    </div>
    <div class="weather_row">
        <span class="weather_svg_span">
            <!-- 2kg Weight SVG Icon -->
            <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <title>Pressure (2kg weight)</title>
                <rect x="8" y="12" width="16" height="12" rx="4" fill="#228acf"/>
                <rect x="12" y="8" width="8" height="4" rx="2" fill="#228acf"/>
                <text x="16" y="21" text-anchor="middle" fill="#fff" font-size="7" font-family="Rubik, sans-serif" font-weight="bold">2kg</text>
            </svg>
        </span>
        <span class="weather_text"><strong>Pressure:</strong></span>
        <span class="weather_value">${weatherData.main.pressure} hPa</span>
    </div>
    <div class="weather_row">
        <span class="weather_svg_span">
            <!-- Visibility SVG -->
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21">
                <title>Visibility</title>
                <ellipse cx="10" cy="10.5" rx="8" ry="5" stroke="#228acf" stroke-width="2"/>
                <circle cx="10" cy="10.5" r="2" fill="#228acf"/>
            </svg>
        </span>
        <span class="weather_text"><strong>Visibility:</strong></span>
        <span class="weather_value">${weatherData.visibility / 1000} km</span>
    </div>
    <div class="weather_row">
        
        <span class="weather_text"><strong>Condition:</strong></span>
        <span class="weather_value">
            ${weatherData.weather[0].main} - ${weatherData.weather[0].description}
        </span>
    </div>
    <div class="weather_row weather_icon">
            <span class="weather_icon_span"><img id="weather_icon" src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather icon"></span>
    </div>
    `;
        }).catch((error) => {
            document.getElementById("weather_result_container").style.display = "none";
            swal("Oops!", error.message, "error");
        });
    }
});
} catch (error) {
    swal("Oops!", error.message, "error");
}
});
