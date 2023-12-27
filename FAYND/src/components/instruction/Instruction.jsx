import React from 'react'
import './Instruction.css'
import bellcard from '../../assets/bellcard.svg'
import vault from '../../assets/vault.svg'
import magnifying from '../../assets/magnifying2.svg'
import { Link } from 'react-router-dom'

const Instruction = () => {
  return (
    <div className={`mainReportedItems ${'add_margin_top'}`}>
        <h1 className='instruction_title'>Reliable Solution for recovering Items.</h1>
        <h2  className='instruction_title2'>Safe yourself the stress of looking for your missing items, <Link to={'/createaccount'}><span className='instruction_span'> create an account</span></Link> with us. No more tears!</h2>

        <div className={`main_divcard ${"green_div"}`}>
            <img src={bellcard} className='bellcard'/>
            <div>
                <p className='divcard_title'>Report stolen items</p>
                <p className='divcard_text'>Always report stolen items on FYND, you’ll be notify once there’s a trace</p>
            </div>
        </div>
        <div className={`main_divcard ${"red_div"}`}>
        <img src={vault} className='bellcard2'/>
            <div>
                <p className='divcard_title'>Create an account with us!</p>
                <p className='divcard_text'>Create an account and track your missing items in real time</p>
            </div>
        </div>
        <div className={`main_divcard ${"brown_div"}`}>
        <img src={magnifying} className='bellcard3'/>
            <div>
                <p className='divcard_title'>How to search for your item </p>
                <p className='divcard_text'>Search for items using the special identity number, such as IMEI, VIN, etc</p>
            </div>
        </div>
   
    </div>
  )
}

export default Instruction