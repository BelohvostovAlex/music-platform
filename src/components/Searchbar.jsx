import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchValue, onChangeSearchvalue] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };
  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          type="search"
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
          value={searchValue}
          onChange={onChangeSearchvalue}
        />
      </div>
    </form>
  );
};

export default Searchbar;
