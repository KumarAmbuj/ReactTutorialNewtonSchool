import { useReducer } from "react";
function reducer(state, data) {
  switch (data.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };
    case "increaseByN":
      return { ...state, count: state.count + data.payload?.increasedValue };
    default:
      return state;
  }
}
function UseReducer2() {
  const [count, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div>{count.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "increaseByN", payload: { increasedValue: 20 } })
          }
        >
          Increment By N
        </button>
      </div>
    </>
  );
}
export default UseReducer2;
