import { render, screen } from "@testing-library/react";
import MainContent from "./index";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("testing all the elements and content inside MainContent comp.", () => {
  it("renders the main heading and subtitle", () => {
    render(<MainContent />);
    expect(screen.getByRole("heading", { name: "Color Picker!" })).toBeInTheDocument();
    expect(screen.getByText("This is where some subtitle is supposed to be")).toBeInTheDocument();
  });

  it("renders the image with correct alt text and src", () => {
    render(<MainContent />);
    const image = screen.getByAltText("subtractive-color-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/additive-subtractive.png");
  });

  it("renders all major section headings", () => {
    render(<MainContent />);
    expect(screen.getByRole("heading", { level: 2, name: "Color Systems" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Pixel" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "RGB and Hexadecimal notation" })).toBeInTheDocument();
  });

  it("renders description of color systems", () => {
    render(<MainContent />);
    expect(
      screen.getByText(
        "A structured method for creating different colors using a set of primary colors and rules for mixing them."
      )
    ).toBeInTheDocument();
  });

  it("renders a few key bullet points", () => {
    render(<MainContent />);
    
    expect(
      screen.getByText("Start with white and apply colored pigments that absorb light.")
    ).toBeInTheDocument();
    
    expect(
      screen.getByText("White when red, blue and green are combined in their maximum intensities")
    ).toBeInTheDocument();

    expect(screen.getByText("rgb(152, 116, 249) (RGB)")).toBeInTheDocument();
    expect(screen.getByText("#9874F9 (HEX)")).toBeInTheDocument();
  });

  it("renders pixel description", () => {
    render(<MainContent />);
    
    expect(
      screen.getByText(
        "It's made of red, green and blue lights with adjustable intensities (a pixels has 3 panels of light)"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "RGB values range from 0 (minimum intensity) - 255 (maximum intensity)"
      )
    ).toBeInTheDocument();
  });
});