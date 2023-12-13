import React,{useState} from 'react'
import './Congratulation.css'
import Navbar from '../../components/navbar/Navbar'
import iphoneImage from '../../assets/Rectangle 3464054.png'
import party from '../../assets/confetti-gif-9.gif'
import adobi from '../../assets/adobi.svg'
import download from '../../assets/downloadIcon.svg'
import copyIcon from '../../assets/copy.svg'
import { useCopy } from '../../custom hooks/copy'

const Congratulation = () => {
const [VIN, setVIN] = useState("2942121212133")
const {handleCopy} = useCopy(VIN)

const handleCopyClick = (e) => {
    e.preventDefault()
    handleCopy()
}
  return (
    <div>
        <Navbar/>
        <div className='create_account_main'>
            <div className='inner_container'>
                <div className='inner_cont_div'>
                <p className='heading_account'>Registration Sucessful</p>
                <p className='second_text2'><span className='span5'>Create an account</span> with FYND  and get access to features like, reporting loss items, tracking and others.</p>
                <p className='vin_TEXT'><span className='Number_'>Number:</span>{VIN}<img src={copyIcon} onClick={handleCopyClick}  className='copyIcon'/> </p>
                    <img src={party} className='party'/>

                <div className='reciept_button'><img src={adobi} className='icon_size'/>Download Receipt<img src={download} className='icon_size'/></div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Congratulation