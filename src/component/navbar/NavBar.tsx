import Brand from "../../view/asset/images/ebakecode.jpg";
import Greeting from "./Greeting.jsx";
import Menu from "./Menu"

const NavBar = () => {
  return  (
    <nav className="nav" >
      <div className="container">
        <div className="nav__main">
          <div className="brand__container">
            <img className="brand" src={Brand} />
          </div>
          <Greeting />
          <Menu />
        </div>
      </div>
    </nav>
    )
}
export default NavBar;
          /**/