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
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: color ?? "transparent" }}>
      <ColorPick colorHeading="RGB Background:" color={color ?? ""} onClick={changeColor} />
    </div>
  );
};

export default Rgb