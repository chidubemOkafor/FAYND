import React from 'react'
import leftCurve from '../../assets/thin_curve.svg'
import RightCurve from '../../assets/thin_curve_right.svg'
import CenterCurve from '../../assets/thin_curve_center.svg'
import woman_left from '../../assets/woman_left.svg'
import woman_right from '../../assets/woman_right.svg'
import './OurUsers.css'
import key from '../../assets/key.png'
import orange_hair from '../../assets/orange_hair.svg'
import black_hair from '../../assets/blackhair.svg'
import woman_center from '../../assets/woman_center.svg'
import people from '../../assets/people.png'
import { checkScreen } from '../../custom hooks/checkScreen'


const OurUsers = () => {
  const {windowSize} = checkScreen()
  const {width} = windowSize
  return (
    <div className='mainReportedItems'>
        <div className='innerMainReported'>
        <h1 className='items_title3'>Our Users</h1>
        <p className='items_sub_title'>this platform allows the collective effort of everyone find a reported item, we need our users, our users needs us and our users needs themseves.</p>
        </div>
        {width > 1085 ? <div className='main_thin_div'>
            <img src={leftCurve} className='left_curve'/>
            <div className='right_thin_curve'>
            <img src={RightCurve} className='right_curve'/>
            <img src={CenterCurve} alt="" className='center_curve' />
            </div>
            <div className='woman_left_container'>
            <img src={woman_left} className='woman_left'/>
            </div>
            <img src={key} className='key_div' />
            <img src={key} className='key_dev2' />
            <img src={woman_right} className='woman_right' />
            <img src={orange_hair} className='orange_hair' />
            <img src={black_hair} className='black_hair' />
            <img src={woman_right} className='woman_center' />
        </div>: 
        <div className='image_backgorund_div'>
          <img src={people} alt='image' className='people'/>
        </div>}
    </div>
  )
}

export default OurUsers