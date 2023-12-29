import React,{useState} from 'react'
import './Detail.css'
import phone from '../../assets/phone.png'
import deleted from '../../assets/deleted.svg'

const Detail = (prop) => {
    const [remove, setRemove] = useState(false)
    const handleClose = () => {
        setRemove(true)
        setTimeout(() => {
            prop.setClose(true)
        },500)
    }
  return (
    <div className={`main_background`}>
        <div className={`detail_box ${remove &&'remove_detail_box'}`}>
            <div>
                <img onClick={handleClose} src={deleted} alt='remove' className='deleted'/>
                <p className='detail'>Detail</p>
                <p className='detail_text'>Create account to access more features</p>
                <div className='email_detail'>
                    <div className='title_div'><p className='title_detail'>Email Address</p><p className='title_response'>mercyunique3@gmail.com</p></div>
                    <div className='title_div'><p className='title_detail'>Date Register</p><p className='title_response'>24-10-2023</p></div>
                    <div className='divider'/>
                    <p className='span'>Other Details</p>
                    <div className='title_div'><p className='title_detail'>Color</p><p className='title_response'>Blue</p></div>
                    <div className='title_div'><p className='title_detail'>Brand</p><p className='title_response'>Apple</p></div>
                    <div className='image_div'>
                    <img src={phone} className='image_size'/>
                    </div>
                </div>

            </div>
            <button className={`grayButton ${'detail_button'}`}>found</button>
        </div>
    </div>
  )
}

export default Detail