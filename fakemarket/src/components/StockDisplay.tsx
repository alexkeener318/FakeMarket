import { useState, useEffect } from "react";
import "./StockDisplay.css";
import useStockPrice from "../useStockPrice";

const StockDisplay = () => {
  const startPrice = 300.23;
  const price = useStockPrice();
  const [percentage, setPercentage] = useState("0.00%");

  const calcPercent = () => {
    return ((price - startPrice) / startPrice) * 100;
  };

  useEffect(() => {
    setPercentage(calcPercent().toFixed(2) + "%");
    // console.log(
    //   `NEW PRICE ALERT: ${price}     ${percentage}      ${300.23 - price}`
    // );
  }, [price]);

  return (
    <div className="stock-holder">
      <h1 className="stock-title">Google</h1>
      <div className="graph"></div>
      <div className="details">
        <p className="value">Current Price: ${price}</p>
        <p>Percent Change: {percentage}</p>
        <button className="buy-button">Buy</button>
        <button className="sell-button">Sell</button>
      </div>
    </div>
  );
};

export default StockDisplay;
