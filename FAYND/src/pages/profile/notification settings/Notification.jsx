import React,{useState} from 'react'
import SideBar from '../../../components/side bar/SideBar'
import './Notification.css'
import uk from '../../../assets/flags/uk.svg'
import arrow_down from '../../../assets/arrow_down.svg'
import notificationBell from '../../../assets/notification_bell.svg'
import {useCopy} from '../../../custom hooks/copy.js'
import copyIcon from '../../../assets/copyIconWhite.svg'
import {notifications} from './notifications.js'
import customerService from '../../../assets/customer_service.svg'
import systems from '../../../assets/systems.svg'

const Notification = () => {
    const [isLanguageToggled, setIsLanguageToggled] = useState(false)
    const [notificationCount] = useState(8)
    const toggleLanguage = () => {
        setIsLanguageToggled(!isLanguageToggled)
    }

    const [referalCode, setReferalCode] = useState("FAYN67890567")
    const {handleCopy} = useCopy(referalCode)
    const [displayId, setDisplayId] = useState(1)

    const handleCopyClick = (e) => {
        e.preventDefault()
        handleCopy()
    }

    function truncateString(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        } else {
            return str.slice(0, maxLength) + '...';
        }
    }

    const selectNotificationToDisplay = (id) => {
        setDisplayId(id - 1)
    }

  return (
    <div className='main_profile_div'>
        <SideBar/>
        <div className='main_profile_notification'>
                <div  className='split_noti'>
                    <div className='noti_title_div'>
                        <h1 className='noti_title'>Notification setting</h1>
                        <div>
                            <div className='language_dropdown'>
                                <div className='container_language' onClick={toggleLanguage}><img src={uk} alt='uk flag' className='uk'/>English<img src={arrow_down} alt='arrow' className={`arrow_down ${isLanguageToggled ? 'rotated' : 'rotated_back'}`}/></div>
                            </div>
                            <div className='language_dropdown_bell'>
                                <div className='container_language'><img src={notificationBell} alt='uk flag'/><div className='notificationCount'>{notifications.length}</div></div>
                            </div>
                        </div>
                    </div>
                    <div className='inner_flex'>
                    <div>
                        <div className='card_div'>
                            <p className='classic_bold_title'>Refer and Earn</p>
                            <p className='second_normal'>Refer FAYND to your friends and get paid N1,000 for everyone that use the platform through you.</p>
                            <p className='tiny'>My Referral code: <span className='bold_tiny'>{referalCode}</span><img src={copyIcon} onClick={handleCopyClick}  className='copyIcon2'/> </p>
                        </div>
                        <div>
                            <p>Notifications</p>
                            <div className='scrollable_notification_bar'>
                            {notifications.map((notification, index)=> (
                                <div key={index}  className='notification_rectangle' onClick={() => selectNotificationToDisplay(notification.id)}>
                                    <img src={notification.type === "alert" ? systems : customerService } className={notification.type === "alert" ? 'image_card_div2' : 'image_card_div'}/>
                                    <div className='color_text'>
                                        <div><h1 className='notification_title'>{notification.title}</h1>{!notification.read && <div className='notification_tag'>new</div>}</div>
                                        <h1 className='notification_subtitle'>{truncateString(notification.content, 80)}</h1>
                                    </div> 
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='shownotification_div'>
                        <div>
                            <h1 className='shownotification_div_title'>{notifications[displayId].title}</h1>
                            <div className='underline'></div>
                            <p>{notifications[displayId].content}</p>
                        </div>
                        <div className='button_noti_div'>
                            <button className='newbutton'>Mark as read</button>
                        </div>
                    </div>
                    </div>
            </div>
           
        </div>
    </div>
  )
}

export default Notification