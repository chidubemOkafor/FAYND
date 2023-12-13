import React,{useState,useRef} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './ReportPage.css'
import arrow_up from '../../assets/arrow_up.svg'
import { Link } from 'react-router-dom';

const ReportPage = () => {
        const [selectedOption, setSelectedOption] = useState('');
        const [images, setImages] = useState([])
        const [isDragging, setIsDragging] = useState(false)
        const fileInputRef = useRef(null)
      
        const selectFile = () => {
            fileInputRef.current.click();
        }

        // Function to handle the change in the selected option
        const handleSelectChange = (event) => {
          setSelectedOption(event.target.value);
        };

        if(selectedOption != "Smartphone") {
            alert("this is not a smartphone")
        }

        const onFileSelect = (event) => {
            const files = event.target.files;
            if(files.length == 0) {
                for(let index = 0; index < array.length; index++) {
                    if(files[i].type.spilt('/')[0] !== 'image') continue;
                    if(!images.some((e) => e.name == files[i].name)) {
                        setImages((prevImages) => [
                            ...prevImages,
                            {
                                name: files[i].name,
                                url: URL.createObjectURL(files[i])
                            }
                        ])
                    }
                }
            }
        }

  return (
    <div>
    <Navbar/>
    <div className='create_account_main'>
        <div className='inner_container'>
            <p className='heading_account'>Create an account</p>
            <p className='second_text'>Make a report about your item, so you get notiy when someone search it.</p>
            <form>
                <div className='report_form'>
                    <div className='inner_report_div'> 
                        <div className='input_div'>
                            <label>Phone Number*</label><br/>
                            <input className='input' type='tel' placeholder='+2349066089664'/>
                        </div>
                        <div className='input_div'>
                            <label>Item type*</label><br/>
                            <select className='input4' value={selectedOption} onChange={handleSelectChange}>
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
                            <input className='input' type='text' placeholder='Prepaid'/>
                        </div>
                        <div className='input_div'>
                            <label>Brand*</label><br/>
                            <input className='input' type='text' placeholder='apple'/>
                        </div>
                        <div className='input_div'>
                            <label>Item's color*</label><br/>
                            <input className='input' type='text' placeholder='apple'/>
                        </div>
                        <div className='input_div'>
                            <label>Item's color*</label><br/>
                            <textarea className='inputTextarea' type='text'/>
                        </div>
                    </div>
                    <div className='inner_report_div'>
                        <div className='input_div'>
                            <label>Email Address*</label><br/>
                            <input className='input' type='email' placeholder='youremail@gmail.com'/>
                        </div>
                        <div className='input_div'>
                            <label>Data*</label><br/>
                            <input className='input' type='date'/>
                        </div>
                        <div className='input_div'>
                            <label>VIN Number*</label><br/>
                            <input className='input' type='number'/>
                        </div>
                        <div className='input_div'>
                            <label>Device Name*</label><br/>
                            <input className='input' type='text'/>
                        </div>
                        <div className='input_div'>
                            <label>Last location*</label><br/>
                            <input className='input' type='text'/>
                        </div>
                        <div className='input_div'>
                            <label>Picture</label><br/>
                            <div className='drag_and_drop_div'>
                                <img src={arrow_up} className='arrow_up'/>
                                <p className='drag_and_drop_text'><span className='span4'>Click to upload</span> or drag and drop SVG, PNG, JPG, OR GIF (max, 800 X 800px)</p>
                                <input type='file' multiple ref={fileInputRef}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type='checkbox'/>
                    <p>Click to ensure this details are correct before submitting</p>
                </div>
            </form>
            <Link to={'./confirmation'}><button className='btn_report'>Save and Continue</button></Link>
        </div>
    </div>
    </div>
  )
}

export default ReportPage