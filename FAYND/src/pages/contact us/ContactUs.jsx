import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './ContactUs.css'
import phone from '../../assets/phone.svg'
import mail from '../../assets/mail.svg'
import web from '../../assets/web.svg'
import facebook from '../../assets/socials/facebook.svg'
import linkedin from '../../assets/socials/linkedin.svg'
import whatsapp from '../../assets/socials/whatsapp.svg'
import twitter from '../../assets/socials/twitter.svg'
import woman_sitting from '../../assets/woman_sitting.svg'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div className='main_contacts'>
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
        </div>
        <div className='main_cont_info'>
            <p className='weCantwait'>We can't wait to hear from you</p>
            <form>
                <div>
                    <div className='main_form_cont_div'>
                        <label>Email address</label>
                        <input type='email' placeholder='john@gmail.com' className='cont_input'/>
                    </div>
                    <div className='main_form_cont_div'>
                        <label>First Name</label>
                        <input type='text' placeholder='e.g john' className='cont_input'/>
                    </div>
                </div>
                <div>
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
                    <textarea className='cont_text_area'/>
                </div>
                <button className='second_gray_button'>Send Chat</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs