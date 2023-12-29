import React,{useState} from 'react'
import './Takedown.css'
import iphoneImage from '../../assets/phone.png'
// this is the take down component
const Takedown = (prop) => {
    const [ID] = useState('4950039403')
  return (
    <div className="background">
    <div className='main_takedown_div'>
        <div className='takedown_heading'>
            <h1 className='take_down_text1'>Take down</h1>
            <h2 className='take_down_text2'>Take down this item</h2>
        </div>
        <div className='container_takedown'>
            <div className='takedown_wide'>
                <div className='fake_input'>
                    <p>Item ID</p>
                    <div className='fake_input_container'> <p>{ID}</p></div>
                </div>
                <div className='fake_input'>
                    <p className='reasons_label'>Reasons</p>
                    <select  className='options_fakeinput'>
                        <option>Illegally reported</option>
                        <option>others</option>
                    </select>
                </div>
            </div>
            <div className='takedown_wide'>
                <div className='fake_input'>
                    <p>Date Registered</p>
                    <div className='fake_input_container'> <p>24-10-2023</p></div>
                </div>
                <div className='fake_input'>
                    <p>Brand</p>
                    <div className='fake_input_container'> <p>Iphone13pro</p></div>
                </div>
            </div>

        </div>

        <div className='image_div2'>
            <img src={iphoneImage} className='iphoneImage2' />
        </div>

        <div className="checkbox_div">
            <input type='checkbox'/>
            <p className='longtext'>By taking down this item, it implies that the item is either found, illegally reported or  wrongly reported. therefore this item will be deleted from your profile and also will not be displayed as missing again. click to accept.</p>
        </div>

        <div className='button_div'>
            <button className='first_button' onClick={prop.toggle}>Cancel</button>
            <button className='second_button'>Take down</button>
        </div>
    </div>
    </div>
  )
}

export default Takedown