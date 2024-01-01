import React from 'react'
import './Search.css'
import back_icon from '../../assets/back_icon.svg'
import magnifying from '../../assets/magnifying3.svg'

const Search = () => {
  return (
    <div className='main_search_div'>
        <div className='inner_center_div'>
          <div className='search_bar_div'>
              <img src={back_icon} alt='back' className='back_icon'/>
              <div className='main_searchbar_div'>
                  <div className='filter_div'></div>
                  <div className='magnifying_container'>
                    <img src={magnifying} alt="magnifying glass" className='magnifying3'/>
                  </div>
                  <input type='text' className='search_input'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Search