# Weather App

A simple and interactive weather application built with JavaScript. This app allows users to search for current weather conditions in any city worldwide using real-time data from a weather API.

## Features

- Search weather by city name
- Displays temperature, humidity, wind speed, and weather conditions
- Responsive and user-friendly interface
- Error handling for invalid city names or network issues

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- [OpenWeatherMap API](https://openweathermap.org/api) (or your chosen weather API)

## Getting Started

### Prerequisites

- Node.js (for development, if using build tools)
- API key from [OpenWeatherMap](https://openweathermap.org/appid) or similar provider

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```
2. Open `index.html` in your browser.

### Configuration

- Replace the placeholder API key in your JavaScript file with your actual API key:
  ```js
  const apiKey = 'YOUR_API_KEY_HERE';
  ```

## Usage

1. Enter a city name in the search bar.
2. Click the "Search" button.
3. View the current weather details for the selected city.

## Folder Structure

```
Weather APP/
├── index.html
├── style.css
├── script.js
└── README.md
```
## Improvement Scope

1. Depending on the weather condition the background scenary should change
2. Toggle switch to change Dark Mode and Normal mode
3. Geolocation API: Offer to get the user’s current location and show weather for it.
4. Unit Toggle (°C/°F)
5. Cache previous weather data and restore it on reload.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- Inspiration from various open-source weather apps
