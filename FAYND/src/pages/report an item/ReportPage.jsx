import React,{useState,useRef,useContext} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './ReportPage.css'
import arrow_up from '../../assets/arrow_up.svg'
import { json, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { dataContext } from '../../contexts/dataContext';
import { checkScreen } from '../../custom hooks/checkScreen';
import { countryAndState } from '../../custom hooks/countryAndStates';
import { country } from '../create_account/country';
import drop_down from '../../assets/drop_down.svg'
import { useDetectClickOutside } from 'react-detect-click-outside'

const ReportPage = () => {
    const {setConfirmData} = useContext(dataContext)
    const formRef = useRef(null) 
    const navigate = useNavigate()
    const [data, setData] = useState({
        phone_number: "",
        type: "",
        email: "",
        date_of_missing: "",
        unique_number: "",
        brand: "",
        model: "",
        color: "",
        last_location: "",
        description: ""
    })
    const { callcode, getCallcode } = countryAndState()
    const [showCode, setShowCode] = useState(false)

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    }

    const handleConfirmation = (e) => {
        e.preventDefault() 
        const newPhoneNumber = callcode + data.phone_number
        const newData = {...data, phone_number: newPhoneNumber}
        setConfirmData(newData)
        navigate('/reportpage/confirmation')
    }

    const {windowSize} = checkScreen()
    const {width} = windowSize

    const toggleCodeSelect = (prop) => setShowCode(prop)


    const ref = useDetectClickOutside({onTriggered: () => setShowCode(false), disableClick: true})

    return (
    <div>
        <Navbar/>
    <div className={width <= 988 ? 'mobile_main_div' : 'create_account_main'}>
        <div className='inner_container'>
            <p className='heading_account'>Report an Item</p>
            <p className='second_text'>Make a report about your item, so you get notiy when someone search it.</p>
            <form onSubmit={handleConfirmation}>
                <div className='inner_report_div'> 
                <div className="input_div">
                    <label>Phone Number*</label>
                    <div className='main_div_input' ref={ref}>
                      <div className='callcode' onClick={() => toggleCodeSelect(!showCode)}>{callcode} <img className='drop_code' src={drop_down}/></div>
                      {showCode && <div className='code_div'>
                      {country.map((count, index) => (
                        <div className='count_name' onClick={() => {
                            getCallcode(index)
                            toggleCodeSelect(false)
                        }} key={index}>{count.name}</div>
                      ))}
                      </div>}
                       <InputMask
                      name="phone_number"
                      value={data.phone_number}
                      onChange={handleChange}
                      className="number_input"
                      mask="9999999999"
                      placeholder="9060000000"
                      required
                    />
                    </div>
                  </div>
                    <div className='input_div'>
                        <label>Email Address*</label>
                        <input className='new_input' type='email' placeholder='youremail@gmail.com' name='email' value={data.email} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Item type*</label>
                        <select className='input5' name='type' value={data.type} onChange={handleChange} required>
                            <option className='option' value="Smartphone">Smartphone</option>
                            <option className='option' value="Vehicle">Vehicle</option>
                            <option className='option' value="Electronics">Electronics</option>
                            <option className='option' value="Console">Console</option>
                            <option className='option' value="Musical Instrument">Musical Instrument</option>
                            <option className='option' value="Pet">Pet</option>
                            <option className='option' value="Cloth">Cloth</option>
                            <option className='option' value="Others">Others</option>
                        </select>
                    </div>
                    <div className='input_div'>
                        <label>Date*</label>
                        <input className='new_input' type='date' name='date_of_missing' value={data.date_of_missing} onChange={handleChange} required/>
                    </div>

                    <div className='input_div'>
                        <label>Means of identity*</label>
                        <input className='new_input' type='text' placeholder='Prepaid' required/>
                    </div>
                    <div className='input_div'>
                        <label>
                        {data.type === "" && "Unique Number*"}
                        {data.type === "Smartphone" && "IMEI Number*"}
                        {data.type === "Vehicle" && "VIN or License plate*"}
                        {data.type === "Electronics" && "Serial Number*"}
                        {data.type === "Console" && "Serial or Model Number*"}
                        {data.type === "Musical Instrument" && "Serial Number*"}
                        {data.type === "Pet" && "unique registration ID"} 
                        {data.type === "Cloth" && "Serial Number*"}
                        {data.type === "Others" && "Enter a unique number for item*"}
                        </label>
                        <input className='new_input' type='text' name='unique_number' value={data.unique_number} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Brand*</label>
                        <input className='new_input' type='text' placeholder={data.type === "Vehicle" ? "toyota" : "apple"} name='brand' value={data.brand} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Model*</label>
                        <input className='new_input' type='text' name='model' value={data.model} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Item's color*</label>
                        <input className='new_input' type='text' placeholder='apple' name='color' value={data.color} onChange={handleChange} required/>
                    </div>
                    <div className='input_div'>
                        <label>Last location*</label>
                        <input className='new_input' type='text' name='last_location' value={data.last_location} onChange={handleChange} required/>
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