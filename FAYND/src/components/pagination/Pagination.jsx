import React,{useState} from 'react'
import './Pagination.css'
import arrowleft from '../../assets/arrowleft.svg'
import arrowRight from '../../assets/arrowRight.svg'

const Pagination = (prop) => {

    const length = Math.ceil(prop.datalength / prop.itemsPerPage)

    const navigate = (direction) => {
        if (direction === "left") {
            prop.setCurrentPage(prop.currentPage > 1 ? prop.currentPage - 1 : 1)
        } else if (direction === "right") {
            prop.setCurrentPage(prop.currentPage < length ? prop.currentPage + 1 : length)
        }
    }

  return (
    <div className='main_pagination'>
        <button className='pagination_button' onClick={() => navigate("left")}><img src={arrowleft}/></button>
        {prop.datalength> prop.itemsPerPage &&
            Array.from({ length }, (_, index) => (
                <button className={`pagination_button ${index + 1 === prop.currentPage ? 'selectButton' : ''}`} key={index} onClick={() => prop.paginate(index + 1)}>
                {index + 1}
                </button>
            )) 
        }
        <button className='pagination_button' onClick={() => navigate("right")}><img src={arrowRight}/></button>
    </div>
  )
}

export default Pagination
// images, imagesPerPage, pagination(function)