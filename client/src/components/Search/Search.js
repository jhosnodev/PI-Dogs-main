
import "./Search.css";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";

function Search({search, setSearch}) {
  const dispatch = useDispatch();
  
  const handleSearch = (e) => {
    setSearch(e.target.value);

  };

  const handleSendName = () => {

    dispatch(getDogByName(search));
  };


  return (
    <div className="search___main">
      <input
        placeholder="Buscar por raza..."
        className="search___input"
        type="search"
        value={search}
        onChange={handleSearch}
      />
      <button
        className="btn___hightlight"
        onClick={handleSendName}
        value={search}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z"
            fill="#f4f2f2"
          />
        </svg>
      </button>
    </div>
  );
}

export default Search;
