import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import countryService from "./services/countries";
import Countries from "./components/Countries";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [countryNames, setCountryNames] = useState([]);

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

  const getDataForCountry = (countryName) => {
    const result = countryData.filter((c) => c.name.common === countryName);
    if (result.length === 1) {
      return result[0];
    }

    return {};
  };

  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <div>
      <Filter filter={filter} onChangeHandler={handleFilterChange} />
      <Countries
        filter={filter}
        countryNames={countryNames}
        getDataForCountry={getDataForCountry}
      />
    </div>
  );
};

export default App;
