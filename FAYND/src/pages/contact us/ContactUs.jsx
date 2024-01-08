import React,{useContext} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './ContactUs.css'
import phone from '../../assets/phone.svg'
import mail from '../../assets/mail.svg'
import web from '../../assets/web.svg'
import facebook from '../../assets/socials/facebook.svg'
import facebook2 from '../../assets/socials/facebook2.svg'
import linkedin from '../../assets/socials/linkedin.svg'
import linkedin2 from '../../assets/socials/linkedin2.svg'
import whatsapp from '../../assets/socials/whatsapp.svg'
import whatsapp2 from '../../assets/socials/whatsapp2.svg'
import twitter from '../../assets/socials/twitter.svg'
import twitter2 from '../../assets/socials/twitter2.svg'
import woman_sitting from '../../assets/woman_sitting.svg'
import { checkScreen } from '../../custom hooks/checkScreen'
import logo from '../../assets/facebook_logo.svg'
import { sideBarContext } from '../../contexts/sideBarContext'
import NavsideBar from '../../components/navbar/NavsideBar'

const ContactUs = () => {
    const {openSidebar, setOpenSidebar} = useContext(sideBarContext)
    const { windowSize } = checkScreen()
    const {width} = windowSize
  return (
    <div>
    {openSidebar && <NavsideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>}
    <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <div>
            {width > 1324 &&   <div className='main_contacts'>
                <div className='main_setter'>
                    <div>
                        <h1 className='getIntouch'>Get  In Touch</h1>
                        <div className='icons_div'>
                            <div className='main_cont_box_div'>
                                <div className='green_circle'><img src={phone} className='cont_icon'/></div>
                                <p className='detail_cont'>+1469 982 3940</p>
                            </div>
                            <div className='main_cont_box_div'>
                                <div className='green_circle'><img src={mail} className='cont_icon'/></div>
                                <p className='detail_cont'>Info.faynd.com</p>
                            </div>
                            <div className='main_cont_box_div'>
                                <div className='green_circle'><img src={web} className='cont_icon'/></div>
                                <p className='detail_cont'>www.faynd.com</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='we_are_social'> We are social </h2>
                            <div className='socials_div'>
                                <div className='container_bottom_icon'>
                                    <div><img src={facebook} className='facebook'/></div>
                                </div>
                                <div className='container_bottom_icon'>
                                    <div><img src={linkedin} className='facebook'/></div>
                                </div>
                                <div className='container_bottom_icon'>
                                    <div><img src={whatsapp} className='facebook'/></div>
                                </div>
                                <div className='container_bottom_icon'>
                                    <div><img src={twitter} className='facebook'/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={woman_sitting} className='woman_sitting' alt='image'/>
                    </div>
                </div>
            </div>
            }
            {width <= 1324 && 
            <div className='mobile_main_div'>
                <img src={woman_sitting} className='woman_sitting_image'/>
                <div className='main_contacts_mobile'>
                    <p className='get_inTouch'>Get In Touch</p>
                    <div className='detail_div'>
                        <div className='main_cont_box_div'><div className='green_circle'><img src={phone} className='cont_icon'/></div>
                            <p className='contact_circle_text'>+1469 982 3940</p>
                        </div>
                        <div className='main_cont_box_div'><div className='green_circle'><img src={mail} className='cont_icon'/></div>
                            <p className='contact_circle_text'>Info.faynd.com</p>
                        </div>
                        <div className='main_cont_box_div'><div className='green_circle'><img src={web} className='cont_icon'/></div>
                            <p className='contact_circle_text'>www.faynd.com</p>
                        </div>
                    </div>
                    <p className='get_inTouch'>We are social</p>
                    <div className='detail_logo_div'>
                        <img src={facebook2} className='mobile_socials'/>
                        <img src={linkedin2} className='mobile_socials'/>
                        <img src={whatsapp2} className='mobile_socials'/>
                        <img src={twitter2} className='mobile_socials'/>
                    </div>
                </div>
            </div>
            }
        </div>
        <div className='main_cont_info'>
            <p className='weCantwait'>We can't wait to hear from you</p>
            <form>
                <div className='grid_block'>
                    <div className='main_form_cont_div'>
                        <label>Email address</label>
                        <input type='email' placeholder='john@gmail.com' className='cont_input'/>
                    </div>
                    <div className='main_form_cont_div'>
                        <label>First Name</label>
                        <input type='text' placeholder='e.g john' className='cont_input'/>
                    </div>
                    <div className='main_form_cont_div'>
                        <label>Services</label>
                        <input type='email' placeholder='john@gmail.com' className='cont_input'/>
                    </div>
                    <div className='main_form_cont_div'>
                        <label>Phone Number</label>
                        <input type='text' placeholder='e.g john' className='cont_input'/>
                    </div>
                </div>
                <div className='main_form_cont_div'>
                    <label>Message</label>
                    {width > 748 ? <textarea className='cont_text_area'/> : <textarea className='cont_text_area2'/> }
                </div>
                <button className={`second_gray_button ${'responsive_button'}`}>Send</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs