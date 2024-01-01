import React,{useState} from 'react'
import './Takedown.css'
import { changeFormat } from '../../custom hooks/convertDate'

const Takedown = (prop) => {
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
                    <div className='fake_input_container'> <p>{prop.renderData.reported_item_number}</p></div>
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
                    <div className='fake_input_container'> <p>{changeFormat(prop.renderData.updated_at,"dash")}</p></div>
                </div>
                <div className='fake_input'>
                    <p>Brand</p>
                    <div className='fake_input_container'> <p>{prop.renderData.model}</p></div>
                </div>
            </div>

        </div>

        <div className='image_div2'>
            <img src={prop.renderData.image_url} className='iphoneImage2' />
        </div>

        <div className="checkbox_div">
            <input type='checkbox'/>
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