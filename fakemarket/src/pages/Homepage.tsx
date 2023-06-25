import Header from "../components/Header";
import AccountValue from "../components/AccountValue";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Header />
      <Link to="/other">Test Stock Here</Link>
      <AccountValue />
    </>
  );
}

export default Homepage;
