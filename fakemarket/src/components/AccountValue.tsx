import "./AccountValue.css";
import useStockPrice from "../useStockPrice";

const AccountValue = () => {
  const currentPrice = useStockPrice();
  const numShares = 12.1;

  return (
    <div className="balance">
      <h2>Account Balance</h2>
      <span className="money">${(numShares * currentPrice).toFixed(2)}</span>
      <span>${currentPrice}</span>
    </div>
  );
};

export default AccountValue;
