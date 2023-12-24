import React,{ useState, useEffect} from 'react'
import './Confirmation.css'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import Cookies from 'js-cookie'

const Confirmation = () => {
    const [file, setFile] = useState()
    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
    const reportData = JSON.parse(localStorage.getItem("reportData"))
    const base64DirectImage = localStorage.getItem('base64Image')

    useEffect(() => {
        const convertBase64ToFile = () => {
            const base64 = localStorage.getItem('base64Image');
            const base64Parts = base64.split(",");
            const fileFormat = base64Parts[0].split(";")[1];
            const fileContent = base64Parts[1];
            const file = new File([fileContent], "file name here", { type: fileFormat });
            return file;
        }
        setFile(convertBase64ToFile());
    },[]);

    console.log(file);

    const formData = new FormData()
    formData.append("image_file", file)
    formData.append("type", reportData.type)
    formData.append("brand", reportData.brand)
    formData.append("model", reportData.model)
    formData.append("color", reportData.color)
    formData.append("description", reportData.description)
    formData.append("last_location", reportData.last_location)
    formData.append("date_of_missing", reportData.date_of_missing)
    formData.append("unique_number", reportData.unique_number)
    formData.append("email", reportData.email)
    formData.append("phone_number", reportData.phone_number)
    
    const config = {
        headers: {
          'Authorization': `Bearer ${Cookies.get('refresh_token')}`
        },
    };
    
    const handleReportItem = async() => {
        console.log("something is wrong")
        try {
            const response = await axios.post(`${url}api/v1/items/report-item`, reportData, config)
            console.log(response)
        } catch (error) {
            console.error(error)
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
                        <div className='detail_div'><p className='title_det'>Email Address</p><p>{reportData.email}</p></div>
                        <div className='detail_div'><p className='title_det'>Item type</p><p>{reportData.type}</p></div>
                        <div className='detail_div'><p className='title_det'>model</p><p>{reportData.model}</p></div>
                    </div>
                    <div className='line'/>
                    <div className='confirm_div'>
                        <p className='span'>Other Details</p>
                        <div className='detail_div'><p className='title_det'>Color</p><p>{reportData.color}</p></div>
                        <div className='detail_div'><p className='title_det'>Brand</p><p>{reportData.brand}</p></div>
                        <div className='detail_div'><p className='title_det'>VIN</p><p>{reportData.unique_number}</p></div>
                    </div>
                    <div className='image_div'>
                        <p>Image</p>
                        <img src={base64DirectImage} alt = "item image" className='iphoneImage' />
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