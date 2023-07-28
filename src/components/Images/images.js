import React from 'react'
import "./images.scss"
import image from "../../assets/IMG1.png"
const Images = () => {
  return (
    <div>
        <div className='products'>
                    <div className='product-image'>
                        <img className='images' src={image} alt="" />
                    </div>

                </div>
    </div>
  )
}

export default Images