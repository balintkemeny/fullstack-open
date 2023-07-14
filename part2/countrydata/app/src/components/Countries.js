const CountryList = ({ countryList, createShowButtonHandler }) => (
  <ul>
    {countryList.map((country) => (
      <li key={country.id}>
        {country.name}
        <button onClick={createShowButtonHandler(country.name)}>show</button>
      </li>
    ))}
  </ul>
);

const CountryDetails = ({ basicData, weatherData }) => (
  <div>
    <h1>{basicData.name.common}</h1>
    <p>
      Capital: {basicData.capital[0]}
      <br />
      Area: {basicData.area} km^2
    </p>
    <h2>Languages:</h2>
    <ul>
      {Object.values(basicData.languages).map((language, i) => (
        <li key={i}>{language}</li>
      ))}
    </ul>
    <img alt={basicData.flags.alt} src={basicData.flags.png}></img>
    <h2>Weather in {basicData.capital[0]}</h2>
    <p>
      Temperature: {weatherData.temperature} °C
      <br />
      <img
        alt="temperature icon"
        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
      ></img>
      <br />
      Wind: {weatherData.wind} m/s
    </p>
  </div>
);

const Countries = ({
  filteredCountries,
  selectedCountryDetails,
  createShowButtonHandler,
}) => {
  if (selectedCountryDetails && filteredCountries.length === 1) {
    return (
      <CountryDetails
        basicData={selectedCountryDetails.basicData}
        weatherData={selectedCountryDetails.weatherData}
      />
    );
  }

  if (filteredCountries.length > 10) {
    return <div>Too many matches, make filter more specific.</div>;
  }

  return (
    <div>
      <CountryList
        countryList={filteredCountries}
        createShowButtonHandler={createShowButtonHandler}
      />
    </div>
  );
};

export default Countries;
