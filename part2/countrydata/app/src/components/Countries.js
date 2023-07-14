const CountryList = ({ countryList }) => (
  <ul>
    {countryList.map((country) => (
      <li key={country.id}>
        {country.id}: {country.name}
      </li>
    ))}
  </ul>
);

const CountryDetails = ({ countryDetails }) => (
  <div>
    <h1>{countryDetails.name.common}</h1>
    <p>
      Capital: {countryDetails.capital[0]}
      <br/>
      Area: {countryDetails.area} km^2
    </p>
    <h2>Languages:</h2>
    <ul>
      {Object.values(countryDetails.languages).map((language, i) => (
        <li key={i}>{language}</li>
      ))}
    </ul>
    <img alt={countryDetails.flags.alt} src={countryDetails.flags.png}></img>
  </div>
);

const Countries = ({ countryNames, filter, getDataForCountry }) => {
  const filteredCountries = countryNames.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (filteredCountries.length > 10) {
    return <div>Too many matches, make filter more specific.</div>;
  }

  if (filteredCountries.length === 1) {
    console.log(filteredCountries[0]);
    const countryDetails = getDataForCountry(filteredCountries[0].name)
    console.log(countryDetails);
    return <CountryDetails countryDetails={countryDetails} />;
  }

  return (
    <div>
      <CountryList countryList={filteredCountries} />
    </div>
  );
};

export default Countries;
