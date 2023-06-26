import { useState, useEffect } from "react";
import calcPrice from "./calculateStockPrice";

const useStockPrice = () => {
  const [price, setPrice] = useState<number>(300.23);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newPrice: number = calcPrice(price);
      setPrice(parseFloat(newPrice.toFixed(2)));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [price]);

  return price;
};

export default useStockPrice;
