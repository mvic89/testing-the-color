interface ColorPickProps {
  color: string,
  colorHeading: string,
  onClick: () => void;
}

const ColorPick = ({color, colorHeading, onClick }: ColorPickProps) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center border p-6 colorDiv">
      <h1>{colorHeading}</h1>
      <h2 className="text-center text-2xl mb-4">{color}</h2>
      <a href="#" className="inline-block p-3 px-6 rounded-lg border-2 bg-amber-300 hover:bg-amber-400 transition cursor-pointer" onClick={onClick}>
        Click me!
      </a>
    </div>
  )
}

export default ColorPick