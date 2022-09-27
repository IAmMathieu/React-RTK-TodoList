import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders the todos", () => {
  test("renders linkOne", () => {
    render(<App />);
    const linkOne = screen.getByText(/Faire la vaisselle/i);
    expect(linkOne).toBeInTheDocument();
  });

  test("renders linkTwo", () => {
    render(<App />);
    const linkTwo = screen.getByText(/Faire la lessive/i);
    expect(linkTwo).toBeInTheDocument();
  });
  test("renders linkThree", () => {
    render(<App />);
    const linkThree = screen.getByText(/Ranger le bureau/i);
    expect(linkThree).toBeInTheDocument();
  });
  test("renders linkFour", () => {
    render(<App />);
    const linkFour = screen.getByText(/Faire les courses/i);
    expect(linkFour).toBeInTheDocument();
  });
});
