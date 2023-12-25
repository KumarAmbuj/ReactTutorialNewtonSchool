import UserName from "../username";
import SearchBox from "../SearchBox";
import Button from "../Button";
import "./searchbar.css";
function SearchBar() {
  return (
    <div className="searchBar">
      <div className="child1">
        <UserName />
      </div>
      <div className="child2">
        <SearchBox />
      </div>
      <div className="child3">
        <Button />
      </div>
    </div>
  );
}
export default SearchBar;
