import React from 'react'
import './Confirmation.css'

const error = ({error}) => {
  return (
    <div className='main_error_div'>
        {error}
    </div>
  )
}

export default error