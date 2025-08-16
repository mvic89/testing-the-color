import {render, screen} from "@testing-library/react"
import Footer from "../Footer"

it('renders the footer paragraph text content', () => {
  render(<Footer/>);

  const footerPar = screen.getByText(/vic: 2025/i);

  expect(footerPar).toBeInTheDocument()
})