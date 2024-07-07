//Weather API call
async function GetWeather(city) {
  const currentRequest = `https://api.weatherapi.com/v1/current.json?key=bea9aff35420486491612231240507&q=${city}`;
  const forecastRequest = `https://api.weatherapi.com/v1/forecast.json?key=bea9aff35420486491612231240507&q=${city}`;

  try {
    const currentResult = await fetch(currentRequest);
    const forecastResult = await fetch(forecastRequest);
    const currentData = await currentResult.json(); //Need to await the resolution of the promise
    const forecastData = await forecastResult.json();
    //Handle unsupported city
    if (
      currentData.error &&
      currentData.error.message === "No matching location found."
    ) {
      alert("This city is not supported, please try another.");
    }
    return [currentData, forecastData];
  } catch (err) {
    console.log("Error Getting Weather", err);
  }
}

//Gather the users location by city
//If gathered, call API
function getCurrLocation() {
  if ("geolocation" in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Reverse geocoding to get city name
          const reverseGeocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
          try {
            const response = await fetch(reverseGeocodeUrl);
            const data = await response.json();
            const weather = await GetWeather(data.address.city); //Success finding location, call weather API
            resolve(weather);
          } catch (error) {
            console.error("Error getting city name:", error);
            reject(error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(error);
        }
      );
    });
  }
}

export { GetWeather, getCurrLocation };
