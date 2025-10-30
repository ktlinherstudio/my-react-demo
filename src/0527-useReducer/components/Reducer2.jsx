import { useReducer } from "react";

export default function Reducer2() {
  // 1️⃣ 預設值
  const initialState = {
    count1: 0,
    count2: 10,
  };

  // 2️⃣ reducer函式（專門負責改變state）
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, count1: state.count1 + action.value };
      case "add2":
        return { ...state, count2: state.count2 + 1 };
      default:
        return state; // ⚠️ 要有 default 回傳原狀態
    }
  };

  // 3️⃣ 在元件中呼叫 useReducer（這裡才放 Hook）
  const [count, dispatch] = useReducer(reducer, initialState);

  // 4️⃣ 回傳 JSX
  return (
    <div>
      <p>count1 遞增 10：{count.count1}</p>
      <p>count2 遞增 1：{count.count2}</p>

      <button onClick={() => dispatch({ type: "add", value: 10 })}>count1</button>
      <button onClick={() => dispatch({ type: "add2", value: 1 })}>count2</button>
    </div>
  );
}