'use client';
import { useState, useEffect } from "react"
import ColorPick from "../components/ColorPick"

const hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const generateHexColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexNumbers.length);
    color += hexNumbers[randomIndex];
  }
  return color;
};

const Hex = () => {
  const [color, setColor] = useState<string | null>(null);

  const changeColor = () => {
    const newColor = generateHexColor();
    setColor(newColor);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color ?? "transparent" }}>
      <ColorPick colorHeading="HEX Background:" color={color ?? ""} onClick={changeColor} />
    </div>
  );
};

export default Hex