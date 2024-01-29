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
import Cookies from 'js-cookie'
import { checkScreen } from '../../../custom hooks/checkScreen'
import arrowLeft from '../../../assets/arrowleft.svg'
import axios from 'axios'
import profileuser from '../../../assets/profile2.svg'

const Message = () => {
  const [displayEmoji, setDisplayEmoji] = useState(false)
  const [tabs, setTabs] = useState(1)
  const {isLoggedIn} = useContext(loginContext)
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState({
    content: ""
  })
  const [nearUsers, setNearUsers] = useState([])
  const [text, setText] = useState({
    from: "",
    to: "",
    content: ""
  })

  const [textMessage, setTextMessage] = useState("")
  
  const URL = import.meta.env.VITE_REACT_APP_ENDPOINT_URL
  const messagesContainerRef = useRef(null)

  const socket = io(URL, { autoConnect: false })

  const {windowSize} = checkScreen()
  const {width} = windowSize

  const getUser = localStorage.getItem("userProfile")
  const userProfile = JSON.parse(getUser)

  useEffect(() => {
    const returnNearUsers = async() => {
      try {
        const response = await axios.get(`${URL}api/v1/users/location?state=${userProfile.state}`,{
          headers: {
            "Authorization" : `Bearer ${Cookies.get("refresh_token")}`
          }
        })
        const filteredUsers = response.data.data.users.filter(user => user.uuid !== userProfile.uuid);
        setNearUsers(filteredUsers);
        console.log(filteredUsers);
      } catch(error) {
        console.error(error)
      }
    }
    returnNearUsers()
  },[])

  useEffect(() => {
    socket.auth = { username : "okaforchidubem7@gmail.com"};
    socket.connect();
    // you are connected
    socket.on("connect", () => {
      console.log("connected")
    })
  }, []);

  // const handleSendMessage = async() => {
  //   const messageData = {
  //     message,
  //     time: new Date().getTime()
  //   }
  //   setMessagesArray((prevMessages) => [...prevMessages, messageData])
  //   setMessage("")
  //   messagesContainerRef.current.scrollTop = await messagesContainerRef.current.scrollHeight;
  // }

  const appendEmoji = (emojiToAppend) => {
    setMessage((prevMessage) => prevMessage + emojiToAppend);
  }

  const handleSelectChat = (prop) => {
    setText((prevMessage) => ({
      ...prevMessage,
      from: userProfile.uuid,
      content: message,
      to: nearUsers[prop].uuid
    }));
    
    (() => {
      setChat(nearUsers[prop]);
      setMessage("");
    })();
  
    // Now this console.log will log the updated state of messageBody.
    console.log(text);
  };

  useEffect(() => {
    socket.on("private-message", (data) => {
      try {
        console.log(data)
        setTextMessage(data.content)
      } catch (error) {
        console.error(error)
      }
    })
  },[])
  
  const sendMessage = () => {
    setTextMessage(message)
    const sessionID = localStorage.getItem("sessionID")
    if(sessionID) {
      socket.auth = {sessionID}
      socket.connect()
    } else {
      socket.auth = {username: userProfile.email}
      socket.connect()
    }

    socket.on("session", ({sessionID, userID}) => {
      console.log(sessionID, userID)
      localStorage.setItem("sessionID", sessionID)
      socket.userID = userID
    })

    socket.emit("private-message", text)
  }

  return (
    <div className='main_profile_div'>
        {width > 1032 && <SideBar/>}
      <div className={`main_profile_div2_6`}>
          <div className='main_profile_div3_5'>
            <div className='navBar_message'>
              <p className='Navbar_text'><img src={arrowLeft} alt='arrowleft' className='arrowleft'/>Chat</p>
              <div className='first_pic_div'>
                <img src={isLoggedIn.data?.image_url === null && profileuser} alt='profile_pic' className='image_message1'/>
                <p className='names1'>{isLoggedIn.data?.first_name} {isLoggedIn.data?.other_names}</p>
              </div>
            </div>
            <div className='chat_div'>
              <div className='chatbox_main'>
                {chat.length !== 0 && <div className='name_tab'>
                  <div>
                    <img src={chat.image_url === null ? profileuser :chat.image_url} className='image_message2' />
                    <p className='names2'>{chat.first_name} {chat.other_names}</p>
                  </div>
                </div>}
                {width > 1032 && <div className='chatbox'>
                  <div className='select_tab'>
                    <span className={`tab_button ${ tabs === 1 && 'hignlight_background'}`} onClick={() => setTabs(1)}> chat </span>
                    <span className={`tab_button ${ tabs === 2 && 'hignlight_background'}`} onClick={() => setTabs(2)}> near </span>
                  </div>
                  {tabs === 1  ? (
                        chat ? (
                        <div className='active_div'>
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
                  </div>): <div className='no_friend'><p className='no_friend_text'>you have no active chat</p></div>) : (
                  <div className='active_div3'>
                     {nearUsers.length === 0 ? <div className='active_div2'>
                      <CgSpinner className='spinner'/>
                      <p className='scanner'>scanning...</p>
                      </div>:
                      nearUsers.map((near, index) => (<div>
                        <div key={index} className='active_div_main' onClick={() => handleSelectChat(index)}>
                            <div className='active_div_second_main'> 
                              <img src={near.image_url === null ? profileuser : near.image_url} className='image_message3' alt = "image"/>
                              <div className=''>
                                <p className='friend_name'>{near.first_name} {near.other_names}</p>
                                <p className='friend_name'>{near.country}</p>
                                <p className='friend_country'>{near.state}</p>
                              </div>
                            </div>
                        </div>
                      </div>))
                      }
                  </div>)}
                </div>}
              </div>
              <div className='nearby_people_list'>
               <div className='main_body_div' ref={messagesContainerRef}>
                    <div>
                    <div className='text_container'>
                      <div>
                        <div className='text_box'>{textMessage}</div>
                        <p className='text_time'>10:15 pm</p>
                      </div>
                    </div>
                    <div className='text_container2'>
                      <div>
                        <div className='text_box2'>{textMessage}</div>
                        <p className='text_time2'>10:15 pm</p>
                      </div>
                    </div>
                    </div>   
                </div>
                {displayEmoji && <div className='emoji_picker'><EmojiPicker setDisplayEmoji={setDisplayEmoji} displayEmoji={displayEmoji} appendEmoji={appendEmoji}/></div>}
                <div className='text_div'>
                  <div className='main_input_div'>
                    <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Write a message...' className='message_input'/>
                    <div>
                      <img src={clip} className='image_action'/>
                      <img src={emoji} className='image_action' onClick={() => setDisplayEmoji(!displayEmoji)}/>
                      <img className='send_image_div' src={sendmessage} onClick={sendMessage}/>
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