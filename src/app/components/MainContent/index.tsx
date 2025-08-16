import Image from "next/image"

const MainContent = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className=" w-[300px] sm:w-[500px] flex flex-col m-auto border rounded-2xl p-4 my-12">
        <h1 className="text-2xl font-bold">Color Picker!</h1>
        <p>This is where some subtitle is supposed to be</p>
        <div className="border rounded-2xl my-2">
          <Image className="w-full" src={'/additive-subtractive.png'} alt="subtractive-color-image" width={500} height={300} style={{height: 'auto'}}/>
        </div>
        <div className="flex flex-col gap-0.5 ">
          <h2 className="text-2xl bold pt-2">Color Systems</h2>
          <p>A structured method for creating different colors using a set of primary colors and rules for mixing them.</p>
          <p>Subtractive color system (commonly used in print and painting) (CMYK) (White paper)</p>
          <ul className="list-disc list-inside ms-2">
            <li>Start with white and apply colored pigments that absorb light.</li>
            <li>The result is black when all pigments are mixed.</li>
          </ul>
          <p>Additive color system (commonly used in electronic displays) (RGB) (Black screen)</p>
          <ul className="list-disc list-inside ms-2">
            <li>Starts with black and emits light at different intensities</li>
            <li>White when red, blue and green are combined in their maximum intensities</li>
          </ul>
          <h2 className="text-2xl bold pt-2">Pixel</h2>
          <p>It's made of red, green and blue lights with adjustable intensities (a pixels has 3 panels of light)</p>
          <p>RGB values range from 0 (minimum intensity) - 255 (maximum intensity)</p>
          <ul className="list-disc list-inside ms-2">
            <li>Red (0 -255)</li>
            <li>Green (0 -255)</li>
            <li>Blue (0 -255)</li>
          </ul>
          <h2>RGB and Hexadecimal notation</h2>
          <p>Color values can be represented in either RGB or Hexadecimal notation</p>
          <ul className="list-disc list-inside ms-2">
            <li>rgb(152, 116, 249) (RGB)</li>
            <li>#9874F9 (HEX)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainContent