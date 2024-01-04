import React,{useState, useEffect, useRef, useContext} from 'react'
import SideBar from '../../../components/side bar/SideBar'
import './Message.css'
import { loginContext } from '../../../contexts/loginContext'
import clip from '../../../assets/clip.svg'
import emoji from '../../../assets/emoji.svg'
import sendmessage from '../../../assets/sendmessage.svg'
import EmojiPicker from '../../../components/emoji_picker/EmojiPicker'
import { CgSpinner } from "react-icons/cg";
import io from 'socket.io-client'


const Message = () => {
  const [displayEmoji, setDisplayEmoji] = useState(false)
  const [tabs, setTabs] = useState(1)
  const {isLoggedIn} = useContext(loginContext)
  const [message, setMessage] = useState("")
  const [messagesArray, setMessagesArray] = useState([]);
  
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL
  const messagesContainerRef = useRef(null)



  // const socket = io(url)

  // useEffect(() => {
  //   const socket = io(url);

  //   // Connection opened
  //   socket.on('connect', () => {
  //     console.log('WebSocket connection opened');
  //   });

  //   // Connection closed
  //   socket.on('disconnect', (reason) => {
  //     console.log('WebSocket connection closed:', reason);
  //   });

  //   // Connection error
  //   socket.on('error', (error) => {
  //     console.error('WebSocket error:', error);
  //   });

  //   // Clean up the WebSocket connection when the component is unmounted
  //   return () => {
  //     socket.disconnect();
  //     console.log('WebSocket connection closed during cleanup.');
  //   };
  // }, [url]);
  
  const handleSendMessage = async() => {
    const messageData = {
      message,
      time: new Date().getTime()
    }
    setMessagesArray((prevMessages) => [...prevMessages, messageData])
    setMessage("")
    messagesContainerRef.current.scrollTop = await messagesContainerRef.current.scrollHeight;
  }

  const appendEmoji = (emojiToAppend) => {
    setMessage((prevMessage) => prevMessage + emojiToAppend);
  }

  return (
    <div className='main_profile_div'>
      <SideBar/>
      <div className='main_profile_div2_6'>
          <div className='main_profile_div3_5'>
            <div className='navBar_message'>
              <p className='Navbar_text'>Chat</p>
              <div className='first_pic_div'>
                <img src={isLoggedIn.data?.image_url} alt='profile_pic' className='image_message1'/>
                <p className='names1'>{isLoggedIn.data?.first_name} {isLoggedIn.data?.other_names}</p>
              </div>
            </div>
            <div className='chat_div'>
              <div className='chatbox_main'>
                <div className='name_tab'>
                  <div>
                    <img src={'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='image_message2' />
                    <p className='names2'>stan lee</p>
                  </div>
                </div>
                <div className='chatbox'>
                  <div className='select_tab'>
                    <span className={`tab_button ${ tabs === 1 && 'hignlight_background'}`} onClick={() => setTabs(1)}> chat </span>
                    <span className={`tab_button ${ tabs === 2 && 'hignlight_background'}`} onClick={() => setTabs(2)}> near </span>
                  </div>
                  {tabs === 1  ? (<div className='active_div'>
                          <div className='active_div_main'>
                            <div className='active_div_second_main'> 
                              <img src={isLoggedIn.data?.image_url} className='image_message3' alt = "image"/>
                              <div className=''>
                                <p className='friend_name'>Acme Co.</p>
                                <p className='friend_country'>Japan</p>
                              </div>
                            </div>
                            <p className='time'>04:15 am</p>
                          </div>
                          <div className='active_div_main'>
                            <div className='active_div_second_main'> 
                              <img src={isLoggedIn.data?.image_url} className='image_message3' alt = "image"/>
                              <div className=''>
                                <p className='friend_name'>Acme Co.</p>
                                <p className='friend_country'>Japan</p>
                              </div>
                            </div>
                            <p className='time'>04:15 am</p>
                          </div>
                          <div className='active_div_main'>
                            <div className='active_div_second_main'> 
                              <img src={isLoggedIn.data?.image_url} className='image_message3' alt = "image"/>
                              <div className=''>
                                <p className='friend_name'>Acme Co.</p>
                                <p className='friend_country'>Japan</p>
                              </div>
                            </div>
                            <p className='time'>04:15 am</p>
                          </div>
                          <div className='active_div_main'>
                            <div className='active_div_second_main'> 
                              <img src={isLoggedIn.data?.image_url} className='image_message3' alt = "image"/>
                              <div className=''>
                                <p className='friend_name'>Acme Co.</p>
                                <p className='friend_country'>Japan</p>
                              </div>
                            </div>
                            <p className='time'>04:15 am</p>
                          </div>
                  </div>) : (
                  <div className='active_div3'>
                      <div className='active_div2'>
                      <CgSpinner className='spinner'/>
                      <p className='scanner'>scanning...</p>
                      </div>
                  </div>)}
                </div>
              </div>
              <div className='nearby_people_list'>
                <div className='main_body_div' ref={messagesContainerRef}>
                    <div className='text_container'>
                      <div>
                      <div className='text_box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.</div>
                      <p className='text_time'>10:15 pm</p>
                      </div>
                    </div>
                    <div className='text_container'>
                      <div>
                      <div className='text_box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.</div>
                      <p className='text_time'>10:15 pm</p>
                      </div>
                    </div>
                    {messagesArray.map((data, index) => (
                    <div key={index} className='text_container2'>
                      <div>
                        <div className='text_box2'>{data.message}</div>
                        <p className='text_time2'>{data.time}</p>
                      </div>
                    </div>
                    ))}
                </div>
                {displayEmoji && <div className='emoji_picker'><EmojiPicker setDisplayEmoji={setDisplayEmoji} displayEmoji={displayEmoji} appendEmoji={appendEmoji}/></div>}
                <div className='text_div'>
                  <div className='main_input_div'>
                    <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Write a message...' className='message_input'/>
                    <div>
                      <img src={clip} className='image_action'/>
                      <img src={emoji} className='image_action' onClick={() => setDisplayEmoji(!displayEmoji)}/>
                      <img className='send_image_div' src={sendmessage} onClick={handleSendMessage}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Message