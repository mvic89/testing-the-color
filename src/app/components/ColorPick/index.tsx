interface ColorPickProps {
  color: string,
  colorHeading: string,
  onClick: () => void;
}

const ColorPick = ({color, colorHeading, onClick }: ColorPickProps) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center border rounded-2xl p-6 bg-white">
      <h1 className="text-2xl">{colorHeading}</h1>
      <h2 className="text-center text-2xl mb-4">{color}</h2>
      <a href="#" className="inline-block  p-3 px-6 rounded-lg border bg-gray-300 hover:bg-gray-400 transition   cursor-pointer" onClick={onClick}>
        Click me!
      </a>
    </div>
  )
}

export default ColorPick