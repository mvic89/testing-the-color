import { render, screen, fireEvent } from '@testing-library/react';
import ColorPick from './index'; 

describe('testing elements, props and button functionality in ColorPick comp.', () => {
  it('renders the color heading', () => {
    render(
      <ColorPick
        color="#123456"
        colorHeading="HEX Background"
        onClick={jest.fn()}
      />
    );

    expect(
      screen.getByRole('heading', { name: /hex background/i })
    ).toBeInTheDocument();
  });

  it('renders the color value', () => {
    render(
      <ColorPick
        color="#123456"
        colorHeading="HEX Background"
        onClick={jest.fn()}
      />
    );

    expect(
      screen.getByRole('heading', { name: /#123456/i })
    ).toBeInTheDocument();
  });

  it('renders a clickable button', () => {
    render(
      <ColorPick
        color="#123456"
        colorHeading="HEX Background"
        onClick={jest.fn()}
      />
    );

    const button = screen.getByRole('link', { name: /click me!/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', () => {
    const handleClick = jest.fn();

    render(
      <ColorPick
        color="#abcdef"
        colorHeading="Test Color"
        onClick={handleClick}
      />
    );

    const button = screen.getByRole('link', { name: /click me!/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});