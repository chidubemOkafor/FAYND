import React from 'react'
import image from '../../assets/FYND nametag wine 1 (1).png'

const EmptyNav = () => {
  return (
    <div className='top_bar'>
    <img className='top_image' src={image}/>
    <button className='sign_in_button'>Sign in</button>
  </div>
  )
}

export default EmptyNav