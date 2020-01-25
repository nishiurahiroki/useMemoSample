import React, { useState, useEffect, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [now, setNow] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const bigNumberTextMemo = useMemo(() => <BigNumberText number={count} />, [
    count
  ]);

  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
      </div>
      <div>{bigNumberTextMemo}</div>
      {/* <BigNumberText number={count} /> Not use memo. */}
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <div>現在日時 : {now}</div>
      <div>
        <button onClick={() => setNow(new Date().toLocaleTimeString())}>
          現在時間更新
        </button>
      </div>
    </div>
  );
}

function BigNumberText({ number }) {
  console.log("描画されたよ");
  return <h1>{number}</h1>;
}
