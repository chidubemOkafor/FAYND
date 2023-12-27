import React from 'react'
import './Congratulation.css'
import Navbar from '../../components/navbar/Navbar'
import Cookies from 'js-cookie'
import forfailed from '../../assets/forfailed.svg'
import exclamation from '../../assets/exclamation.svg'

const ReportedAlready = () => {
  return (
    <div>
        <Navbar/>
        <div className='create_account_main'>
            <div className='inner_container'>
                <div className='inner_cont_div'>
                  <div className='inner_cont_div2' >
                  <p className='heading_account'>Report Unsucessful</p>
                  {!Cookies.get("refresh_token") ? <p className='second_text2'><span className='span5'>Create an account</span> with FYND  and get access to features like, reporting loss items, tracking and others.</p>: <p>reported items will be displayed in the home page or you can search for it with the number</p>}
                  </div>
                  <img src={forfailed} className='party'/>
                  <div className='alert'>
                    <img src={exclamation}/>
                    <div>
                      <p className='main_text_report'>We’re sorry  to inform you  that this item is reported already</p>
                      <p className='second_main_text_report'>Please check our about us page to contact us for more clarifications.</p>
                    </div>
                  </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default ReportedAlready