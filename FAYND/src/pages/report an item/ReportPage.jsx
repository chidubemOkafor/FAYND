import React,{useState,useRef,useContext} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './ReportPage.css'
import arrow_up from '../../assets/arrow_up.svg'
import { json, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { dataContext } from '../../contexts/dataContext';
import { checkScreen } from '../../custom hooks/checkScreen';

const ReportPage = () => {
    const {setConfirmData} = useContext(dataContext)
    const formRef = useRef(null) 
    const navigate = useNavigate()
    const [data, setData] = useState({})

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    }

    const handleConfirmation = (e) => {
        e.preventDefault() 
        // i'll set the data to local storage here
        setConfirmData(data)
        navigate('/reportpage/confirmation')
    }

    const {windowSize} = checkScreen()
    const {width} = windowSize

    return (
    <div>
        <Navbar/>
    <div className={width <= 988 ? 'mobile_main_div' : 'create_account_main'}>
        <div className='inner_container'>
            <p className='heading_account'>Report an Item</p>
            <p className='second_text'>Make a report about your item, so you get notiy when someone search it.</p>
            <form onSubmit={handleConfirmation}>
                <div className='inner_report_div'> 
                    <div className='input_div'>
                        <label>Phone Number*</label>
                        <InputMask
                        name="phone_number"
                        value={data.phone_number}
                        onChange={handleChange}
                        className="input4"
                        mask="+2349999999999"
                        placeholder="+2349060000000"
                        required
                        />
                    </div>
                    <div className='input_div'>
                        <label>Email Address*</label>
                        <input className='input4' type='email' placeholder='youremail@gmail.com' name='email' value={data.email} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Item type*</label>
                        <select className='input5' name='type' value={data.type} onChange={handleChange} required>
                            <option className='option' value="Smartphone">Smartphone</option>
                            <option className='option' value="Electronics">Electronics</option>
                            <option className='option' value="Console">Console</option>
                            <option className='option' value="Musical Instrdivument">Musical Instrument</option>
                            <option className='option' value="Pet">Pet</option>
                            <option className='option' value="Others">Others</option>
                        </select>
                    </div>
                    <div className='input_div'>
                        <label>Date*</label>
                        <input className='input4' type='date' name='date_of_missing' value={data.date_of_missing} onChange={handleChange} required/>
                    </div>

                    <div className='input_div'>
                        <label>Means of identity*</label>
                        <input className='input4' type='text' placeholder='Prepaid' required/>
                    </div>
                    <div className='input_div'>
                        <label>VIN Number*</label>
                        <input className='input4' type='number' name='unique_number' value={data.unique_number} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Brand*</label>
                        <input className='input4' type='text' placeholder='apple' name='brand' value={data.brand} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Model*</label>
                        <input className='input4' type='text' name='model' value={data.model} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Item's color*</label>
                        <input className='input4' type='text' placeholder='apple' name='color' value={data.color} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Last location*</label>
                        <input className='input4' type='text' name='last_location' value={data.last_location} onChange={handleChange} required/>
                    </div>
                    <div className='input_div2'>
                        <label>Picture</label>
                        <div className='drag_and_drop_div'>
                            <img src={arrow_up} className='arrow_up'/>
                            <p className='drag_and_drop_text'><span className='span4'>Click to upload</span> or drag and drop SVG, PNG, JPG, OR GIF (max, 800 X 800px)</p>
                            <input type='file' name='image_file' onChange={handleChange} required />
                        </div>
                    </div>
                    <div className='input_div2'>
                        <label>Item Description*</label>
                        <textarea className='inputTextarea' type='text' name='description' value={data.description} onChange={handleChange} required/>
                    </div> 
                </div>
                <div className='lower_button_div'>
                    <div>
                        <input type='checkbox'/>
                        <p className='clickText'>Click to ensure this details are correct before submitting</p>
                    </div>
                    <button className='btn_report' type='submit'>Save and Continue</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}
//<Link to={'./confirmation'}>

export default ReportPage