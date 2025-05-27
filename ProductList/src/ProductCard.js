import React from 'react'

function ProductCard({title,image,price,rating}) {
  return (
    <div className='card'>
      <img src={image} alt='Image Not Found'/>
      <p>{title}</p>
      <p>${price}</p>
      <p>{rating.rate}</p>
    </div>
  )
}

export default ProductCard