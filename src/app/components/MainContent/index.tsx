import Image from "next/image"

const MainContent = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div>
        <h1>Color Picker!</h1>
        <p>This is where some subtitle is supposed to be</p>
      </div>
      <div>
        <Image src={'/additive-subtractive.png'} alt="subtractive-color-image" width={900} height={300} style={{height: 'auto'}}/>
      </div>
    </div>

  )
}

export default MainContent