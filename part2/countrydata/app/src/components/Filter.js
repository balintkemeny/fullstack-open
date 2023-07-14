const Filter = ({ filter, onChangeHandler }) => (
  <form>
    <div>
      find countries: <input onChange={onChangeHandler} value={filter}></input>
    </div>
  </form>
);

export default Filter;
