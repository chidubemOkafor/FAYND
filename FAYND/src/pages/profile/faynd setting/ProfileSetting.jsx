import React,{useEffect, useState, useContext} from 'react'
import SideBar from '../../../components/side bar/SideBar'
import './ProfileSetting.css'
import arrow_up from '../../../assets/arrow_up.svg'
import profileuser from '../../../assets/profile2.svg'
import axios from 'axios'
import Cookies from 'js-cookie'
import { loginContext } from '../../../contexts/loginContext'
import { checkScreen } from '../../../custom hooks/checkScreen'
import arrowLeft from '../../../assets/arrowleft.svg'
import { Link } from 'react-router-dom'


const ProfileSetting = () => {
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
  const [file, setFile] = useState(null)
  const {windowSize} = checkScreen()
  const {width} = windowSize

  const {isLoggedIn} = useContext(loginContext)

  const config = {
    headers: {
      'Authorization': `Bearer ${Cookies.get('refresh_token')}`
    }
  }

  const handleChange = (event) => {    
    setFile(event.target.files[0])
  }

  const uploadImage = async() => {
    const formData = new FormData()
          formData.append('image_file',file)
    try {
      await axios.post(`${url}api/v1/users/upload`,formData,config)
      setFile(null)
      window.location.reload();
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='main_profile_div'>
        {width > 1032 && <SideBar/>}
        <div className={`main_profile_div2 ${width < 1032 && 'main_profile_width'}`}>
          <div className='main_profile_div3'>
            <div className='main_profile_div_top'>
            {width <= 1032 && <Link to={'/profile'}><img src={arrowLeft}/></Link> }<p className='name_title'>Profile Setting</p>
              <button className='profile_button'>Save Changes</button>
            </div>
            <form className='profile_form'>
              <div className='inner_form_div1'>
                <div className='profile_input_div'>
                  <label className='profile_label'>Names</label>
                  <input className='profile_input' type='text' placeholder={isLoggedIn.data?.first_name}/>
                </div>
                <div className='profile_input_div'>
                  <label className='profile_label'>Phone Number</label>
                  <input className='profile_input' type='text' placeholder={isLoggedIn.data?.phone_number}/>
                </div>
              </div>
              <div className='profile_email_div'>
                  <label className='profile_label'>Email Address </label>
                  <input className='profile_email' type='email' placeholder={isLoggedIn.data?.email}/>
              </div>
              <div className='profile_email_div'>
                  <label className='profile_label'>Home Address <span className='optional'>(Optional)</span></label>
                  <input className='profile_email' type='text' placeholder='lutton england'/>
              </div>
              <div className='inner_form_div1'>
                <div className='profile_input_div'>
                  <label className='profile_label'>Country</label>
                  <select className='profile_select'>
                  <option value="" disabled selected>{isLoggedIn.data?.country}</option>
                    <option>Nigeria</option>
                    <option>America</option>
                  </select>
                </div>
                <div className='profile_input_div'>
                  <label className='profile_label'>State</label>
                  <select className='profile_select'>
                  <option value="" disabled selected>{isLoggedIn.data?.state}</option>
                    <option>Nigeria</option>
                    <option>America</option>
                  </select>
                </div>
              </div>
              <div className='profile_email_div'>
                  <label className='profile_label'>About you <span className='optional'>(Optional)</span></label>
                  <textarea className='profile_textarea' placeholder='write about yourself here'/>
              </div>
              <button className='mobileProfileButton'>Save Changes</button>
            </form>
            <div className='photo_div'>
              <p className='yourphoto'>Your Photo</p>
              <div className='underline_div'/>
              <div className='update_image_div'>
                <img src={isLoggedIn.data?.image_url == null ? profileuser : isLoggedIn.data?.image_url} className='profile_image'/>
                <div className='edit_div'>
                  <p className='edit_photo'>Edit Photo</p>
                  <div>
                    <p className='delete'>delete</p>
                    <p className='update' onClick={uploadImage}>update</p>
                  </div>
                </div>
              </div>
              <div className='drag_div'>
                <div className='drag_and_drop_div2'>
                    <img src={arrow_up} className='arrow_up'/>
                    <p className='drag_and_drop_text'><span className='span4'>Click to upload</span> or drag and drop SVG, PNG, JPG, OR GIF (max, 800 X 800px)</p>
                    <input   
                      type='file'
                      name='image_file'
                      onChange={handleChange}
                      required
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileSetting