 import {render, screen} from '@testing-library/react'
 import Header from './index'

test("that the page title is rendered correctly on the screen", () => {
  render(<Header/>)

  const pageTitle = screen.getByText(/Header!/i);

  expect(pageTitle).toBeInTheDocument();
})
