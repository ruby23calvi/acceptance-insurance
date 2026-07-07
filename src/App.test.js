import { render, screen } from "@testing-library/react";
import App from "./App";


test("renders Acceptance Insurance application", () => {

  render(<App />);


  const title =
  screen.getByText(/Acceptance Insurance/i);


  expect(title).toBeInTheDocument();

});
