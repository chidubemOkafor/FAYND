import React,{useState} from 'react'
import './Congratulation.css'
import Navbar from '../../components/navbar/Navbar'
import party from '../../assets/confetti-gif-9.gif'
import adobi from '../../assets/adobi.svg'
import download from '../../assets/downloadIcon.svg'
import copyIcon from '../../assets/copy.svg'
import { useCopy } from '../../custom hooks/copy'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { saveAs } from 'file-saver'

const Congratulation = () => {
    const {Rnum} = useParams()
    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
    const [reported_item_number]=  useState(Rnum)
    const {handleCopy} = useCopy(reported_item_number)

    const handleCopyClick = (e) => {
        e.preventDefault()
        handleCopy()
    }

    const downloadReceipt = async () => {
        try {
          const response = await axios.get(`${url}api/v1/items/download-reported-item/${Rnum}`, {
            headers: {
              Authorization: `Bearer ${Cookies.get('refresh_token')}`
            },
            responseType: 'arraybuffer',
          });
          const blob = new Blob([response.data], { type: 'application/pdf' });
          saveAs(blob, 'receipt.pdf');
        } catch (error) {
          console.error('Error downloading receipt:', error);
        }
      };
  return (
    <div>
        <Navbar/>
        <div className='create_account_main'>
            <div className='inner_container'>
                <div className='inner_cont_div'>
                    <p className='heading_account'>Registration Sucessful</p>
                    <p className='second_text2'><span className='span5'>Create an account</span> with FYND  and get access to features like, reporting loss items, tracking and others.</p>
                    <p className='vin_TEXT'><span className='Number_'>Number:</span>{reported_item_number}<img src={copyIcon} onClick={handleCopyClick}  className='copyIcon'/> </p>
                    <img src={party} className='party'/>
                    <div className='reciept_button' onClick={downloadReceipt}><img src={adobi} className='icon_size'/>Download Receipt<img src={download} className='icon_size'/></div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Congratulation