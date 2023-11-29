import React from 'react'
import "./ChooseScreen.css"
import fynd from '../../assets/Fynd_single.png'
import spiral from "../../assets/path40.png"
import { Link } from 'react-router-dom'


const ChooseScreen = () => {
  return (
    <div className='choose_screen_main'>
        <div>
            <svg className='left_img' xmlns="http://www.w3.org/2000/svg" width="901" height="1024" viewBox="0 0 901 1024" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M159.071 -22.7459C298.069 -45.8853 428.108 -193.938 555.977 -134.688C682.891 -75.8806 663.919 112.357 723.669 238.87C781.716 361.778 904.693 459.256 900.656 595.125C896.431 737.287 810.335 868.607 702.212 960.938C598.278 1049.69 459.511 1080.14 323.1 1088.32C196.135 1095.94 58.0318 1086.75 -39.8198 1005.45C-131.362 929.38 -106.331 783.523 -166.984 681.098C-235.89 564.735 -400.218 506.902 -414.671 372.434C-429.758 232.071 -356.639 77.9402 -240.418 -2.10985C-127.842 -79.6499 24.2415 -0.300444 159.071 -22.7459Z" fill="#2E151B"/>
            </svg>
        </div>
        <div className='first_option_div'>
            <h1 className='heading'>Report yout items!</h1>
            <p className='faint'>Regster,report and track your item with us!</p>
            <button className='gray_button'><Link to={'/createaccount'}>Create Account</Link></button>
            <button className='transparent_button'>login</button>
            <a className='underline_button'>Register items</a>
        </div>
    </div>
  )
}

export default ChooseScreen