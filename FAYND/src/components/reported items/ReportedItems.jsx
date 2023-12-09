import React from 'react'
import pinkdot from '../../assets/dot/pinkdot.svg'
import bluedot from '../../assets/dot/bluedot.svg'
import greendot from '../../assets/dot/greendot.svg'
import './ReportedItems.css'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import { reportedItems } from './items'
import thumbnail from '../../assets/Rectangle 3464029.png'

const ReportedItems = () => {
  return (
    <div className='mainReportedItems'>
        <div className='dots_and_logo'>
            <img src={bluedot}/>
            <img src={greendot}/>
        </div>
        <h1 className='items_title'>Reported Items</h1>
        <p className='items_sub_title'>Display of stolen items. you can search for more</p>
       
        <div className='faynd_div'>
            <div className='dot_abs_div'>
            <img src={greendot}/>
            <img src={bluedot}/>
            </div>
        <img src={fayndLogo} className='fayndLogo2'/>
        </div>
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

export default ReportedItems