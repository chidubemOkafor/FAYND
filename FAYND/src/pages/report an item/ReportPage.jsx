import React,{useState,useRef, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './ReportPage.css'
import arrow_up from '../../assets/arrow_up.svg'
import { json, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Cookies from 'js-cookie';

const ReportPage = () => {
        const formRef = useRef(null) 
        const navigate = useNavigate()
        const [data, setData] = useState({})
        const [base64Data, setBase64Data] = useState("")

        const handleChange = (event) => {
            const { name, value, type, files } = event.target;
        
            setData((prevData) => ({
                ...prevData,
                [name]: type === 'file' ? files[0] : value,
            }));
        }

        console.log(data.image_file)

        
            const convertToBase64 = () => {
                if (data.image_file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const base64 = event.target.result;
                       localStorage["base64Image"] = base64;
                    }
                    reader.readAsDataURL(data.image_file);
                } else {
                    console.log("nothing yet");
                }
            };

        const handleConfirmation = (e) => {
            e.preventDefault() 
            // i'll set the data to local storage here
            localStorage.setItem('reportData', JSON.stringify(data))
            convertToBase64()
            navigate('/reportpage/confirmation')
        }

  return (
    <div>
    <Navbar/>
    <div className='create_account_main'>
        <div className='inner_container'>
            <p className='heading_account'>Report an Item</p>
            <p className='second_text'>Make a report about your item, so you get notiy when someone search it.</p>
            <form onSubmit={handleConfirmation}>
                <div className='report_form'>
                    <div className='inner_report_div'> 
                        <div className='input_div'>
                            <label>Phone Number*</label><br/>
                            <InputMask
                            name="phone_number"
                            value={data.phone_number}
                            onChange={handleChange}
                            className="input"
                            mask="+2349999999999"
                            placeholder="+2349060000000"
                            required
                            />
                        </div>
                        <div className='input_div'>
                            <label>Item type*</label><br/>
                            <select className='input4' name='type' value={data.type} onChange={handleChange} required>
                                <option className='option' value="Smartphone">Smartphone</option>
                                <option className='option' value="Electronics">Electronics</option>
                                <option className='option' value="Console">Console</option>
                                <option className='option' value="Musical Instrument">Musical Instrument</option>
                                <option className='option' value="Pet">Pet</option>
                                <option className='option' value="Others">Others</option>
                            </select>
                        </div>
                        <div className='input_div'>
                            <label>Means of identity*</label><br/>
                            <input className='input' type='text' placeholder='Prepaid' required/>
                        </div>
                        <div className='input_div'>
                            <label>Brand*</label><br/>
                            <input className='input' type='text' placeholder='apple' name='brand' value={data.brand} onChange={handleChange} required/>
                        </div>
                        <div className='input_div'>
                            <label>Item's color*</label><br/>
                            <input className='input' type='text' placeholder='apple' name='color' value={data.color} onChange={handleChange} required/>
                        </div>
                        <div className='input_div'>
                            <label>Item Description*</label><br/>
                            <textarea className='inputTextarea' type='text' name='description' value={data.description} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className='inner_report_div'>
                        <div className='input_div'>
                            <label>Email Address*</label><br/>
                            <input className='input' type='email' placeholder='youremail@gmail.com' name='email' value={data.email} onChange={handleChange} required/>
                        </div>
                        <div className='input_div'>
                            <label>Date*</label><br/>
                            <input className='input' type='date' name='date_of_missing' value={data.date_of_missing} onChange={handleChange} required/>
                        </div>
                        <div className='input_div'>
                            <label>VIN Number*</label><br/>
                            <input className='input' type='number' name='unique_number' value={data.unique_number} onChange={handleChange} required/>
                        </div>
                        <div className='input_div'>
                            <label>Model*</label><br/>
                            <input className='input' type='text' name='model' value={data.model} onChange={handleChange} required/>
                        </div>
                        <div className='input_div'>
                            <label>Last location*</label><br/>
                            <input className='input' type='text' name='last_location' value={data.last_location} onChange={handleChange} required/>
                        </div>
                        <div className='input_div'>
                            <label>Picture</label><br/>
                            <div className='drag_and_drop_div'>
                                <img src={arrow_up} className='arrow_up'/>
                                <p className='drag_and_drop_text'><span className='span4'>Click to upload</span> or drag and drop SVG, PNG, JPG, OR GIF (max, 800 X 800px)</p>
                                <input type='file' name='image_file' onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lower_button_div'>
                    <div>
                    <input type='checkbox'/>
                        <p>Click to ensure this details are correct before submitting</p>
                    </div>
                    <button className='btn_report' type='submit'>Save and Continue</button>
                    {data.image_file && <img src={URL.createObjectURL(data.image_file)} alt='image'/>}
                </div>
            </form>
           
        </div>
    </div>
    </div>
  )
}
//<Link to={'./confirmation'}>

export default ReportPage