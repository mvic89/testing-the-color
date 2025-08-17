import {render, screen, fireEvent} from "@testing-library/react"
import RootLayout from "./layout"

describe("integration testing home page functionality", () => {
  it("renders the logo text on the home page", () => {
    render(<RootLayout />);

    const Logo = screen.getByText(/color picker!/i)

    expect(Logo).toBeInTheDocument();
  });

  it("displays multiple paragraphs about color systems on the home page", () => {
    render(<RootLayout />);

    fireEvent.click(screen.getByText("HOME"));

    const paragraphs = screen.getAllByText(/color/i);
    expect(paragraphs.length).toBeGreaterThan(1);
  });

  it("does not show HEX section when on the home page", () => {
    render(<RootLayout />);

    fireEvent.click(screen.getByText("HOME"));

    const hexHeading = screen.queryByText("HEX Background:");
    expect(hexHeading).not.toBeInTheDocument();
  });

  it("navigates to RGB and updates the colors on click", () => {
    render(<RootLayout />);

    fireEvent.click(screen.getByText("RGB"));

    const rgbButton = screen.getByRole("link", { name: /click me!/i });
    fireEvent.click(rgbButton);

    const rgbValue = screen.getByRole("heading", { level: 2 });
    expect(rgbValue.textContent?.startsWith("rgb(")).toBe(true);
  });

  it("navigates to HEX and updates the colors on click", () => {
    render(<RootLayout />);

    fireEvent.click(screen.getByText("HEX"));

    const hexButton = screen.getByRole("link", { name: /click me!/i });
    fireEvent.click(hexButton);

    const hexValue = screen.getByRole("heading", { level: 2 });
    expect(hexValue.textContent?.startsWith("#")).toBe(true);
  });

  it("renders the footer text on the home page", () => {
    render(<RootLayout />);

    const FooterText = screen.getByText(/vic: 2025/i)

    expect(FooterText).toBeInTheDocument();
  });
})