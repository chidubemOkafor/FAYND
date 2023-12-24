import React from 'react'
import SideBar from '../../../components/side bar/SideBar'
import './ProfileSetting.css'

const ProfileSetting = () => {
  return (
    <div className='main_profile_div'>
        <SideBar/>
        <div className='main_profile'>
            <div className='second_main_profile'>
                <div className='heading_profile'>
                    <h1 className='heading_prof_text'>Profile Setting</h1>
                    <button className='save_button'>Save Changes</button>
                </div>
                <div>this is supposed to be workin</div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSetting