import React,{useState} from 'react'
import './Takedown.css'
import { changeFormat } from '../../custom hooks/convertDate'

const Takedown = (prop) => {
    const [showOthers, setShowOthers] = useState(false)
    const handleChange = (e) => {
        if (e.target.value === 'others') {
            setShowOthers(true)
            alert(working)
        } 
        setShowOthers(false)
    }
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
                    <label className='label3'>Item ID</label>
                    <div className='fake_input_container'> <p>{prop.renderData.reported_item_number}</p></div>
                </div>
                <div className='fake_input'>
                    <label className='reasons_label'>Reasons</label>
                    <select onChange={handleChange}  className='options_fakeinput'>
                        <option>Illegally reported</option>
                        <option>others</option>
                    </select>
                </div>
            </div>
            <div className='takedown_wide'>
                <div className='fake_input'>
                    <label className='label3'>Date Registered</label>
                    <div className='fake_input_container'> <p>{changeFormat(prop.renderData.updated_at,"dash")}</p></div>
                </div>
                <div className='fake_input'>
                    <label className='label3'>Brand</label>
                    <div className='fake_input_container'> <p>{prop.renderData.model}</p></div>
                </div>
            </div>
            {showOthers && 
                <div className='fake_input2'>
                    <label className='label3'>your reason</label>
                    <input className='fake_input_container'/>
                </div>
            }
        </div>
        <div className='image_div2'>
            <img src={prop.renderData.image_url} className='iphoneImage2' />
        </div>

        <div className="checkbox_div">
            <input type='checkbox' className='checkbox'/>
            <p className='longtext'>By taking down this item, it implies that the item is either found, illegally reported or  wrongly reported. therefore this item will be deleted from your profile and also will not be displayed as missing again. click to accept.</p>
        </div>

        <div className='button_div'>
            <button className='first_button' onClick={() => prop.setShowDetail(!prop.showDetail)}>Cancel</button>
            <button className='second_button'>Take down</button>
        </div>
    </div>
    </div>
  )
}

export default Takedown