import "./navbar.css";
function NavBar() {
  return (
    <>
      <div className="header">
        <div className="logoName">
          <div className="logo">
            <img src="./images/myblog.png"></img>
          </div>
          <div className="name">MyBlog</div>
        </div>
        <div className="navItem">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Category</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="rightNav">
          <ul>
            <li>Sign up</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;
