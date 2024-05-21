import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filters/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <div className={css.animatedText}>
        <p className={css.label}>Find your contacts</p>
      </div>
      <input
        className={css.inputSearch}
        type="text"
        placeholder="Search by name or number..."
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
