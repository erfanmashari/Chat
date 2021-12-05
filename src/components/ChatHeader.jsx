import Call from "./Call"
import ContactProfile from "./ContactProfile"
import { useState, useContext } from "react"
import { AppContext } from "../App.js";
import { IoCall, IoVideocam } from "react-icons/io5"
import { BsThreeDots, BsArrowReturnRight } from "react-icons/bs"

const ChatHeader = ({ menuSide, setMenuSide, setBlock }) => {
    const appContext = useContext(AppContext)

    const [callSide, setCallSide] = useState("")
    const [blockButton, setBlockButton] = useState(true)

    let classN;
    switch (appContext.chatNum[0] % 6) {
        case 0:
            classN = "chat-profile-img text-white bg-primary"
            break;
        case 1:
            classN = "chat-profile-img text-white bg-secondary"
            break;
        case 2:
            classN = "chat-profile-img text-white bg-danger"
            break;
        case 3:
            classN = "chat-profile-img text-white bg-success"
            break;
        case 4:
            classN = "chat-profile-img text-white bg-dark"
            break;
        case 5:
            classN = "chat-profile-img text-white bg-warning"
            break;
        default:
            break;
    }

    const chatName = appContext.chats[0][appContext.chatNum[0]].props.name

    const profileImage = JSON.parse(localStorage.getItem(`${chatName}-img`))
    
    // show profile
    const showProfile = e => {
        setCallSide(<ContactProfile name={chatName} index={appContext.chatNum[0]} setCallSide={setCallSide} />)
    }

    // delete history
    const deleteHistory = e => {
        localStorage.removeItem(`${chatName}-messages`)

        appContext.messagesSide[1](false)
        
        const chatsMenu = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstChild.children[2].children

        // remove last message
        for (const key in chatsMenu) {
            if (isNaN(key) === false) {
                if (chatsMenu[key].classList.contains(chatName)) {
                    chatsMenu[key].firstChild.children[1].children[1].textContent = ""
                }
            }
        }
    }

    const block = e => {
        setBlock(false)
        setBlockButton(false)
    }

    const removeChat = e => {
        setMenuSide(true)

        localStorage.removeItem(`${chatName}-messages`)

        const chatsMenu = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstChild.children[2].children
        // remove chat
        for (const key in chatsMenu) {
            if (isNaN(key) === false) {
                if (chatsMenu[key].classList.contains(chatName)) {
                    chatsMenu[key].firstChild.remove()
                }
            }
        }

        const chatNames = JSON.parse(localStorage.getItem("chats"))
        
        const newChatNames = chatNames.filter((name, index) => index !== appContext.chatNum[0] ? name : "")
        
        localStorage.setItem("chats", JSON.stringify(newChatNames))
        
        const newChats = appContext.chats[0].filter((name, index) => index !== appContext.chatNum[0] ? name : "")
        
        appContext.chats[1](newChats)
        
        appContext.chatNum[1]("")

        // setIsRemoved(true)
    }

    return (
        <div className="chat-header">
            {menuSide ? <>
                <div className="chat-profile" onClick={e => showProfile(e)}>
                {profileImage !== null ? <img src={profileImage[0]} alt={profileImage[1]} className="chat-image-profile" /> :
                <h2 className={classN}>{chatName.substring(0, 1)}</h2>}
                <div className="chat-text">
                    <h6>{chatName}</h6>
                    <p>Online</p>
                </div>
                </div>
                <div className="mt-3">
                    <IoCall onClick={() => setCallSide(<Call classN={classN}
                        setCallSide={setCallSide} callType="Calling..." />)}
                        className="chat-icons" />
                    <IoVideocam onClick={() => setCallSide(<Call classN={classN}
                        setCallSide={setCallSide} callType="VideoCalling..." />)}
                        className="chat-icons" />
                    <BsThreeDots onClick={() => setMenuSide(false)} className="chat-icons" />
                </div>
            {callSide}</> : 
            <div className="col-12 d-flex justify-content-between align-items-center">
                <div>
                    <button onClick={e => deleteHistory(e)}
                    className="chat-header-buttons btn mx-2">Delete History</button>
                    {blockButton ?<button onClick={e => block(e)}
                    className="chat-header-buttons btn">Block Chat</button> : 
                    <button onClick={e => {setBlockButton(true) 
                        setBlock(true)}}
                    className="btn btn-primary text-white">UnBlock Chat</button>}
                    <button onClick={e => removeChat(e)}
                    className="chat-header-buttons btn mx-2">Remove Chat</button>
                    {callSide}
                </div>
                <BsArrowReturnRight onClick={() => setMenuSide(true)}
                className="return-icon fs-2 text-white rounded-3 p-1" />
            </div>}
        </div> 
    )
}

export default ChatHeader