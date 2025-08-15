 import {fireEvent, render, screen} from '@testing-library/react'
 import Header from './index'
 import "@testing-library/jest-dom";

 describe("testing the Header and the navlinks funcionality", () => {
  it("renders the heading and all nav items", () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    expect(screen.getByRole("heading", { name: "Color Picker" })).toBeInTheDocument();
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("RGB")).toBeInTheDocument();
    expect(screen.getByText("HEX")).toBeInTheDocument();
  });

  it("calls setCurrentPage with 'home' when HOME is clicked", () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    fireEvent.click(screen.getByText("HOME"));
    expect(mockSetCurrentPage).toHaveBeenCalledWith("home");
  });

  it("calls setCurrentPage with 'rgb' when RGB is clicked", () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    fireEvent.click(screen.getByText("RGB"));
    expect(mockSetCurrentPage).toHaveBeenCalledWith("rgb");
  });

  it("calls setCurrentPage with 'hex' when HEX is clicked", () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    fireEvent.click(screen.getByText("HEX"));
    expect(mockSetCurrentPage).toHaveBeenCalledWith("hex");
  });

  it("calls setCurrentPage the correct number of times", () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    fireEvent.click(screen.getByText("HOME"));
    fireEvent.click(screen.getByText("RGB"));
    fireEvent.click(screen.getByText("HEX"));

    expect(mockSetCurrentPage).toHaveBeenCalledTimes(3);
  });
 });
