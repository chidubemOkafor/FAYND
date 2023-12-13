import Reactc,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import slantPink from '../../assets/slantPink.svg'
import './FAQ.css'
import uparrow from '../../assets/Group.svg'
import downArrow from '../../assets/upArrow.svg'

const FAQ = () => {
  const [openText, setOpenText] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false
  })

  const handleOpen = (buttonValue) => {
    setOpenText((prevOpenText) => ({
      ...Object.fromEntries(Object.keys(prevOpenText).map(key => [key, key === buttonValue])),
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
                    <div className={openText.one ? 'box_animation' : 'box_info'} onClick={() => handleOpen('one')} style={{ height: openText.one && 150, zIndex: 20 }}>
                        <div className='box_container'>
                          <img src={openText ? downArrow : uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                            How can i see my items since i dont have an account
                            {openText && <p className='animate_text'> create an account to have access to your registerd items anytime,anyday</p>}
                        </div>   
                    </div>
                    <div className={openText.one ? 'box_animation' : 'box_info'} onClick={() => handleOpen('two')} style={{ height: openText.one && 150, zIndex: 20 }}>
                        <div className='box_container'>
                          <img src={uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                            Can i see other people’s stolen items
                            <p>yes, you can see other people’ stolen items in the home page</p>
                        </div>
                    </div>
                    <div className={openText.one ? 'box_animation' : 'box_info'} onClick={() => handleOpen('three')} style={{ height: openText.one && 150, zIndex: 20 }}>
                        <div className='box_container'>
                          <img src={uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                        Do i need to create account before reporting an item?
                        <p>you do not need to create an account before you can report the item</p>
                        </div>
                    </div>
                    <div className='box_info' value = 'four'>
                        <div className='box_container'>
                          <img src={uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                        Can i contact others
                        </div>
                    </div>
                    <div className='box_info' value = 'five'>
                        <div className='box_container'>
                          <img src={uparrow} className='uparrow'/>
                        </div>
                        <div className='texts_divs'>
                        Do i need to create account before reporting an item?
                        </div>
                    </div>
                    <div className='box_info' value = 'six'>
                        <div className='box_container'>
                          <img src={uparrow} className='uparrow'/>
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