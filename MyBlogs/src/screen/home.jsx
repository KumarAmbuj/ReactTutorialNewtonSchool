import HeaderImage from "../component/HeaderImage";
import NavBar from "../component/Navbar";
import SearchBar from "../component/SearchBar";
import About from "../pages/About";
import Signup from "../pages/Signup";
function Home() {
  return (
    <>
      <NavBar />
      <SearchBar />
      {/* <HeaderImage /> */}
      {/* <About /> */}
      <Signup />
    </>
  );
}
export default Home;
