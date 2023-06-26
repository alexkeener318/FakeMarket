import Header from "../components/Header";
import StockDisplay from "../components/StockDisplay";
import { Link } from "react-router-dom";
const TestStock = () => {
  return (
    <>
      <Header />
      <Link to="/">Back to homepage</Link>
      <StockDisplay />
    </>
  );
};

export default TestStock;
