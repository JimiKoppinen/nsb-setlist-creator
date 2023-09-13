import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <Link to="/SongContainer">Song Container</Link>
      <Link to="/ArtistList">Artist List</Link>
    </div>
  );
};

export default Nav;
