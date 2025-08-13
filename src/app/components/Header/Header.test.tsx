 import {render, screen} from '@testing-library/react'
 import Header from './index'

test("that the page title is rendered correctly on the screen", () => {
  render(<Header/>)

  const pageTitle = screen.getByText(/Header!/i);

  expect(pageTitle).toBeInTheDocument();
})

test("that the h1 element exists", () => {
  render(<Header/>)

  const headingElement = screen.getByRole('heading');

  expect(headingElement).toBeInTheDocument();
})

test("that the h2 element doesn't exist", () => {
  render(<Header/>)

  const wrongHeading = screen.queryByRole('header');
  
  expect(wrongHeading).not.toBeInTheDocument()
})