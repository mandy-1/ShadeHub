import React, { useState, useEffect } from 'react'
import './css/Body.css'
import { HexColorPicker } from 'react-colorful'
import Values from "values.js";
import isColor from "is-color";


const Body = () => {

  // const [color, setColor] = useState("#b32aa9");
  const [color, setColor] = useState("#3393a1");
  const [shades, setShades] = useState([]);
  const [tints, setTints] = useState([]);

  const [rgbStr, setRgbStr] = useState("")
  const [hslStr, setHslStr] = useState("")
  const [cmykStr, setCmykStr] = useState("")
  const [labStr, setLabStr] = useState("")
  const [colorBrightness, setColorBrightness] = useState("")

  let shades1 = []

  useEffect(() => {
    if (isColor(color)) createShadesAndTints(color);
  }, [color]);

  const onInputChange = (value) => {
    setColor(value);
  };

  const createShadesAndTints = (color) => {
    const input_color = new Values(color);
    let shades = input_color.shades(2);
    let tints = input_color.tints(2);


    setRgbStr(input_color.rgbString())

    // color-convert
    var convert = require('color-convert');
    let hsl = (convert.rgb.hsl(convert.hex.rgb(color))).toString()
    let cmyk = (convert.hex.cmyk(color)).toString(  )
    let lab = (convert.hex.lab(color)).toString(  )

    setHslStr(hsl)
    setCmykStr(cmyk)
    setLabStr(lab)
    setColorBrightness(input_color.getBrightness())
    
    tints.reverse()
    tints = tints.slice(20,50)

    shades1 = shades.slice(0,10)
    tints = [...tints, ...shades1]
    setTints(tints);

    shades = shades.slice(10,50)
    setShades(shades);

  };

  return (
      <div className='body'>

        <div className='color-picker left'>
          <HexColorPicker color={color} onChange={setColor}/>
          
          <div className='display-color' >Current Color:</div>
          <div className='partition'></div>

          <div className='current-color-info'>
            <div className='current-color-box' style={{ backgroundColor: color }} ></div>
            <input type="text" className='shade-input color-input' title='Input color'  value={color} onChange={(e) => onInputChange(e.target.value)} />
          </div>

          <div className='partition'></div>
          
          <div className='corresponding-color-text'>Corresponding color values:</div>
          <div>
            <div className='rgb-color-info color-key-text'><span>RGB :</span><span className='color-value-text'>{rgbStr}</span></div>
            <div className='hsl-color-info color-key-text'><span>HSL :</span><span className='color-value-text'>{hslStr}</span></div>
            <div className='lab-color-info color-key-text'><span>LAB :</span><span className='color-value-text'>{labStr}</span></div>
            <div className='cmyk-color-info color-key-text'><span>CMYK :</span><span className='color-value-text'>{cmykStr}</span></div>
            <div className='brightness-color-info color-key-text'><span>Brightness :</span><span className='color-value-text'>{colorBrightness}</span></div>
          </div>
        </div>

        <div className='shades right'>
          <div className='shades-list'>

            {tints.map((tint) => (
              <div className="tint" style={{ backgroundColor: tint.hexString() }}>
                <span className='tint-text'>{tint.hexString()}</span>
              </div>
          ))}
            {shades.map((shade) => (
              <div className="shade" style={{ backgroundColor: shade.hexString() }}>
                <span className='shade-text'>{shade.hexString()}</span>
              </div>
          ))}
          </div>
        </div>

      </div>
    )
}

export default Body