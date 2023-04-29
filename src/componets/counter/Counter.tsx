import { useState } from "react";

const Counter:React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const handleRemoveOne = () => {
    if(count === 0) return;
    setCount(count - 1);
  }
  return (
    <div>
        <button onClick={() => setCount( count + 1)}>Add One</button>
        <button onClick={handleRemoveOne}>Remove One</button>
        <div role="contentinfo">Count is {count}</div>
    </div>
  );
};
export default Counter;