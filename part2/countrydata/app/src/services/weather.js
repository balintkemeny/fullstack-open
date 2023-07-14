import axios from "axios"

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

const get = (lat, lon) => {
  if (!weatherApiKey) {
    console.log("No API key provided")
    return null
  }

  const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`)
  return request.then((response) => response.data)
}

const weatherService = {
  get
};

export default weatherService;