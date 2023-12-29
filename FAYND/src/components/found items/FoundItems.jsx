import './FoundItems.css'
import { reportedItems } from '../reported items/items'
import thumbnail from '../../assets/Rectangle 3464029.png'
import React from 'react'

const FoundItems = () => {
  return (
    <div className='mainReportedItems' style={{marginTop: 100}}>
      <h1 className='items_title'>Found  items</h1>
      <p className='items_sub_title'>Display of stolen items. you can search for more</p>
      <div className='grid_items'>
          {reportedItems.map((items, index) => (<div key={index}>
              <img className='thumbnail' src={thumbnail}/>
              <div className='items_inner_div'>
                  <div>
                      <p className='name_of_item'>{items.name}</p>
                      <p className='location_of_item'>{items.location}</p>
                  </div>
                  <button className='details_button'>Details</button>
              </div>
          </div>))}
      </div>
    </div>
  )
}

export default FoundItems