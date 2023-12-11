import React from 'react'
import './Confirmation.css'
import Navbar from '../../components/navbar/Navbar'
import iphoneImage from '../../assets/Rectangle 3464054.png'


const Confirmation = () => {
  return (
    <div>
        <Navbar/>
        <div className='create_account_main'>
            <div className='inner_container'>
                <p className='heading_account'>Preview</p>
                <p className='second_text'>Create account to access more features</p>
                <div className='inner_cont_div'>
                    <div className='confirm_div'>
                        <div className='detail_div'><p className='title_det'>Email Address</p><p>youremail@gmail.com</p></div>
                        <div className='detail_div'><p className='title_det'>Item type</p><p>smartphone</p></div>
                        <div className='detail_div'><p className='title_det'>Sub-category</p><p>Telephone</p></div>
                    </div>
                    <div className='line'/>
                    <div className='confirm_div'>
                        <p className='span'>Other Details</p>
                        <div className='detail_div'><p className='title_det'>Color</p><p>blue</p></div>
                        <div className='detail_div'><p className='title_det'>Brand</p><p>Apple</p></div>
                        <div className='detail_div'><p className='title_det'>VIN</p><p>2003NHER99</p></div>
                    </div>
                    <div className='image_div'>
                        <p>Image</p>
                        <img src={iphoneImage} className='iphoneImage' />
                    </div>
                    <button className='btn_report'>Submit</button>
                    <p className='back'>Back</p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Confirmation