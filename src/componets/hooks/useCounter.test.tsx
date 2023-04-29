import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";


test("should increment", ()=> {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.increment();
    })

    expect(result.current.count).toBe(1);
})

test("should decrement", ()=> {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.decrement();
    })

    expect(result.current.count).toBe(-1);
})