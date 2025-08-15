import { useState, useEffect } from "react";
import ColorPick from "../components/ColorPick";

const generateRgbColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const Rgb = () => {
  const [color, setColor] = useState<string | null>(null); 

  const changeColor = () => {
    const newColor = generateRgbColor();
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  useEffect(() => {
    if (color) {
      document.body.style.backgroundColor = color;
    }
  }, [color]);

  return (
    <ColorPick color={color ?? ""} onClick={changeColor} />
  );
};

export default Rgb