import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/content/Header";

const menuSelected = { name: "people" };

test("test rendering", () => {
  render(<Header menuSelected={menuSelected} />);
  const appTitle = screen.getByText(/Imperal/i);
  expect(appTitle).toBeInTheDocument();
  const currentTitle = screen.getByText(/people/i);
  expect(currentTitle).toBeInTheDocument();
  const input = screen.getByPlaceholderText(/Search/i);
  expect(input).toBeInTheDocument();
  const select = screen.getByTestId("select");
  expect(select).toBeInTheDocument();
});

test("test input", () => {
  render(<Header menuSelected={menuSelected} />);
  const input = screen.getByPlaceholderText(/Search/i);
  fireEvent.change(input, { target: { value: "23" } });
  expect(screen.getByDisplayValue("23")).toBeVisible();
});

test("test select", () => {
  render(<Header menuSelected={menuSelected} />);

  const select = screen.getByTestId("select");
  fireEvent.click(select);
  expect(screen.getByText("Asc")).toBeVisible();
});
