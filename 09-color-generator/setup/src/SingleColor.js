import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ alpha, rgb, type, weight }) => {
  const hexColor = rgbToHex(...rgb);
  const style = {
    backgroundColor: `rgb(${rgb.join(', ')})`,
  };

  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500);
    return () => clearTimeout(timeout)
  }, [alert])

  const handleAlert = () => {
    navigator.clipboard.writeText(hexColor);
    setAlert(!alert);
  }

  return (
    <article className="color" style={style} onClick={handleAlert}>
      <p className="percent-value">{`${weight}%`}</p>
      <p className="color-value">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
