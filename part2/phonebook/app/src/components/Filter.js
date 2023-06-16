const Filter = ({ filter, handleChangeFilter }) => (
  <form>
    <div>
      search: <input onChange={handleChangeFilter} value={filter} />
    </div>
  </form>
);

export default Filter;
