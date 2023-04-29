import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("check addOne", () => {
    render(<Counter />);
    const buttonElement = screen.getByText("Add One");
    const divElement = screen.getByRole("contentinfo");
    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent("Count is 1");

})

test("check removeOne", () => {
    render(<Counter />);
    const buttonElementRemove = screen.getByText("Remove One");
    const divElement = screen.getByRole("contentinfo");
    fireEvent.click(buttonElementRemove);
    fireEvent.click(buttonElementRemove);
    expect(divElement).toHaveTextContent("Count is 0");

})