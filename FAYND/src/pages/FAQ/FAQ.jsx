import Reactc,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import slantPink from '../../assets/slantPink.svg'
import './FAQ.css'
import uparrow from '../../assets/Group.svg'
import downArrow from '../../assets/upArrow.svg'

const FAQ = () => {
  const [openText, setOpenText] = useState({
    "one": false,
    "two": false,
    "three": false,
    "four": false,
    "five": false,
    "six": false
  })

  const handleOpen = (buttonValue) => {
    setOpenText((prevOpenText) => ({
      ...prevOpenText,
      [buttonValue]: !prevOpenText[buttonValue],
    }));
  };
  
  return (
    <div>
        <Navbar/>
            <img src={slantPink} className='slantPink'/>
            <div className='main_Faq_div'>
            <div className='heading_faq'>
              <p className='faqMain'>FAQ</p>
              <h1 className='AnyQues'>Any Questions? Look Here</h1>
              <h2 className='second_ques'>We’re here to help you navigate this platform, we hope to answer all your questions.</h2>
            </div>
            <div>
              <div className='grid_faq'>
                    <div className={!openText.one ? 'box_info' : 'box_animation'} onClick={() => handleOpen("one")} style={{ height: openText.one && 150, zIndex:20}}>
                        <div className='box_container'>
                          <img src={openText.one ? downArrow : uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                            How can i see my items since i dont have an account
                            {openText.one && <p className='animate_text'> create an account to have access to your registerd items anytime,anyday</p>}
                        </div>   
                    </div>
                    <div className={!openText.two ? 'box_info' : 'box_animation'} onClick={() => handleOpen("two")} style={{ height: openText.two && 150, zIndex:20}}>
                        <div className='box_container'>
                          <img src={openText.two ? downArrow : uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                            Can i see other people’s stolen items
                            {openText.two && <p className='animate_text'>yes, you can see other people’ stolen items in the home page</p>}
                        </div>
                    </div>
                    <div className={!openText.three ? 'box_info' : 'box_animation'} onClick={() => handleOpen("three")} style={{ height: openText.three && 150, zIndex:20}}>
                        <div className='box_container'>
                          <img src={openText.three ? downArrow : uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                        Do i need to create account before reporting an item?
                        {openText.three && <p className='animate_text'>Can i track my missing items here?</p>}
                        </div>
                    </div>
                    <div className={!openText.four ? 'box_info' : 'box_animation'} onClick={() => handleOpen("four")} style={{ height: openText.four && 150, zIndex:20}}>
                        <div className='box_container'>
                          <img src={openText.four ? downArrow : uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                        Can i contact others
                        {openText.four && <p className='animate_text'>yes, there are numerous ways you can contact other here</p>}
                        </div>
                    </div>
                    <div className={!openText.five ? 'box_info' : 'box_animation'} onClick={() => handleOpen("five")} style={{ height: openText.five && 150, zIndex:20}}>
                        <div className='box_container'>
                          <img src={openText.five ? downArrow : uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                        Can i track my missing items here?
                        {openText.five && <p className='animate_text'>you can track your missing items by searching for them</p>}
                        </div>
                    </div>
                    <div className={!openText.six ? 'box_info' : 'box_animation'} onClick={() => handleOpen("six")} style={{ height: openText.six && 150, zIndex:20}}>
                        <div className='box_container'>
                          <img src={openText.six ? downArrow : uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                        Can i contact others
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ