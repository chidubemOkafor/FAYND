import React,{ useState, useEffect, useContext} from 'react'
import './Confirmation.css'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import Cookies from 'js-cookie'
import { dataContext } from '../../contexts/dataContext'
import { useNavigate } from 'react-router-dom'

const Confirmation = () => {
    const navigate = useNavigate()
    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
    const {confirmData, setConfirmData} = useContext(dataContext)

    // helper function
    const isEmpty = (obj) => {
        return Object.entries(obj).length === 0;
      };

    useEffect(() => {
        if(isEmpty(confirmData)) {
            navigate('/reportpage')
        }
    },[])

    const formData = new FormData()
    formData.append("image_file", confirmData.image_file)
    formData.append("type", confirmData.type)
    formData.append("brand", confirmData.brand)
    formData.append("model", confirmData.model)
    formData.append("color", confirmData.color)
    formData.append("description", confirmData.description)
    formData.append("last_location", confirmData.last_location)
    formData.append("date_of_missing", confirmData.date_of_missing)
    formData.append("unique_number", confirmData.unique_number)
    formData.append("email", confirmData.email)
    formData.append("phone_number", confirmData.phone_number)
    
    const config = {
        headers: {
            Authorization: `Bearer ${Cookies.get('refresh_token')}`
        },
    };
    
    const handleReportItem = async() => {
        try {
            const response = await axios.post(`${url}api/v1/items/report-item`,formData, config)
            if(response.data.message === "Item has been successfully reported") {
                console.log(response.data.data.item.reported_item_number)
                navigate(`/reportpage/confirmation/congratulation/${response.data.data.item.reported_item_number}`)
            }
        } catch (error) {
            if(error.response.data.message === "product has already been reported") {
                navigate('/reportpage/confirmation/errorreporting')
            }
            console.log(error)
        }
    }
    
  return (
    <div>
        <Navbar/>
        <div className='create_account_main'>
            <div className='inner_container'>
                <p className='heading_account'>Preview</p>
                <p className='second_text'>Create account to access more features</p>
                <div className='inner_cont_div'>
                    <div className='confirm_div'>
                        <div className='detail_div'><p className='title_det'>Email Address</p><p>{confirmData.email}</p></div>
                        <div className='detail_div'><p className='title_det'>Item type</p><p>{confirmData.type}</p></div>
                        <div className='detail_div'><p className='title_det'>model</p><p>{confirmData.model}</p></div>
                    </div>
                    <div className='line'/>
                    <div className='confirm_div'>
                        <p className='span'>Other Details</p>
                        <div className='detail_div'><p className='title_det'>Color</p><p>{confirmData.color}</p></div>
                        <div className='detail_div'><p className='title_det'>Brand</p><p>{confirmData.brand}</p></div>
                        <div className='detail_div'><p className='title_det'>VIN</p><p>{confirmData.unique_number}</p></div>
                    </div>
                    <div className='image_div'>
                        <p>Image</p>
                        <img src={confirmData.image_file && URL.createObjectURL(confirmData.image_file)} alt = "item image" className='iphoneImage' />
                    </div>
                    <button className='btn_report' onClick={handleReportItem}>Submit</button>
                    <p className='back'>Back</p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Confirmation