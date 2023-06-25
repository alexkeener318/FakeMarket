import "./StockDisplay.css";
import { useState, useEffect } from "react";
import calcPrice from "../calculateStockPrice";
const StockDisplay = () => {
  const [price, setPrice] = useState<number>(300.23);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newPrice: number = calcPrice(price);
      console.log(`NEW PRICE ALERT: ${newPrice}`);
      setPrice(parseFloat(newPrice.toFixed(2)));
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [price]);
  return (
    <div className="stock-holder">
      <h3 className="title"> Google </h3>
      <p className="value"> ${price}</p>
    </div>
  );
};

export default StockDisplay;
