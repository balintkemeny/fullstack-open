import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import countryService from "./services/countries";
import Countries from "./components/Countries";
import weatherService from "./services/weather";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [countryNames, setCountryNames] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);

  useEffect(() => {
    countryService.getAll().then((data) => {
      setCountryData(data);
      setCountryNames(
        data.map((countryData, i) => {
          return { id: i, name: countryData.name.common };
        })
      );
    });
  }, []);

  useEffect(() => {
    if (!selectedCountry) {
      return;
    }

    const basicData = countryData.filter(
      (c) => c.name.common.toLowerCase() === selectedCountry
    )[0];
    const [lat, lon] = basicData.capitalInfo.latlng;

    weatherService.get(lat, lon).then((weatherServiceResponse) => {
      const weatherData = {
        temperature: weatherServiceResponse.main.temp,
        wind: weatherServiceResponse.wind.speed,
        icon: weatherServiceResponse.weather[0].icon,
      };
      setSelectedCountryDetails({
        basicData,
        weatherData,
      });
    });
  }, [countryData, selectedCountry]);

  const filteredCountries = countryNames.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (
    filteredCountries.length === 1 &&
    filteredCountries[0].name.toLowerCase() !== selectedCountry
  ) {
    setSelectedCountry(filteredCountries[0].name.toLowerCase());
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const createShowButtonHandler = (countryName) => () => setFilter(countryName);

  return (
    <div>
      <Filter filter={filter} onChangeHandler={handleFilterChange} />
      <Countries
        filteredCountries={filteredCountries}
        selectedCountryDetails={selectedCountryDetails}
        createShowButtonHandler={createShowButtonHandler}
      />
    </div>
  );
};

export default App;
