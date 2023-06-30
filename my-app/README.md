# Weather App

This is a Weather app created using React, which provides real-time weather information for a given location. The app utilizes the OpenWeatherMap API to fetch weather data and display it in a user-friendly manner.

# Features

Search for weather: Enter a location in the search bar and press the "Search" button to fetch weather information for that location.

Current weather conditions: The app displays the current weather conditions including temperature, humidity, wind speed, and weather description.

Forecast for the next 5 days: The app provides a 5-day forecast, including the date, temperature, and weather description for each day.

Responsive design: The app is designed to be responsive and adapt to different screen sizes, providing a seamless experience across devices.

# Technologies Used
React: A JavaScript library for building user interfaces.
React-redux: for state management
Create React App: A popular tool to set up a new React project quickly.
MUI: A css library that is use for design our pages
OpenWeatherMap API: An API that provides weather data for locations around the world.
Getting Started

# Follow these steps to run the Weather app locally:

Clone the repository:


Copy code
git clone https://github.com/your-username/weather-app.git
Navigate to the project directory:


Copy code
cd my-app
Install dependencies:

Copy code
## npm install
Obtain an API key from OpenWeatherMap:

Sign up for a free account on OpenWeatherMap to get an API key.
Copy the API key to use in the app.
Set up environment variables:

Create a new file named .env in the root directory of the project.
Add the following line to the .env file, replacing YOUR_API_KEY with your actual API key:
makefile
Copy code
REACT_APP_API_KEY=YOUR_API_KEY
Start the development server:

Copy code
## npm start
Open your browser and visit http://localhost:3000 to view the app.

## Folder Structure
The project structure is set up by Create React App and follows the standard conventions:


Copy code
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      actions
      assets
      components
      reducer
      store
      testCases
    App.js
    index.css
    index.js

## Contribution
Contributions to this Weather app are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request to the GitHub repository.

License
This project is licensed under the MIT License.

