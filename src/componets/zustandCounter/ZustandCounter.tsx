import { useStore } from "../../store/zustandStore";

export function ZustandCounter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment
        </button>
        <button aria-label="Decrement value" onClick={decrement}>
          Decrement
        </button>
        <span role="contentinfo">{count}</span>
      </div>
    </div>
  );
}