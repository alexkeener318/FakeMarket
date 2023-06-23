import "./Header.css";
import Menu from "../assets/menu.svg";
const Header = () => {
  return (
    <div className="container">
      <div className="menu">
        <img src={Menu} height="40px" />
      </div>
      <h1 className="title">Yerrrr</h1>
    </div>
  );
};

export default Header;
