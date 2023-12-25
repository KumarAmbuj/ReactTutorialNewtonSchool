import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/movies/Drama">
        <div className="link">DRAMA</div>
      </Link>
      <Link to="/movies/Horror">
        <div className="link">HORROR</div>
      </Link>
      <Link to="/movies/Comedy">
        <div className="link">COMEDY</div>
      </Link>
      <Link to="/movies/Sci-Fi">
        <div className="link">SCI-FI</div>
      </Link>
      <Link to="/movies/Sports">
        <div className="link">SPORTS</div>
      </Link>
    </div>
  );
}
export default Navbar;
