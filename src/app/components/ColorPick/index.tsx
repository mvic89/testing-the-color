interface ColorPickProps {
  color: string,
  onClick: () => void;
}

const ColorPick = ({color, onClick }: ColorPickProps) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center border p-6 colorDiv">
      <h2 className="text-center text-2xl mb-4">{color}</h2>
      <a className="inline-block p-3 px-6 rounded-lg border-2 bg-amber-300 hover:bg-amber-400 transition cursor-pointer" onClick={onClick}>
        Click me!
      </a>
    </div>
  )
}

export default ColorPick