import Call from "./Call"
import ContactProfile from "./ContactProfile"
import { useState } from "react"
import { IoCall, IoVideocam } from "react-icons/io5"
import { BsThreeDots, BsArrowReturnRight } from "react-icons/bs"

const ChatHeader = ({ chats, chatNum, setChatNum, setMessagesSide, menuSide, setMenuSide, setBlock }) => {
    const [callSide, setCallSide] = useState("")
    const [blockButton, setBlockButton] = useState(true)

    let classN;
    switch (chatNum % 6) {
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

    const chatName = chats[chatNum].props.name

    // show profile
    const showProfile = e => {
        setCallSide(<ContactProfile name={chatName} index={chatNum} setCallSide={setCallSide} />)
    }

    // delete history
    const deleteHistory = e => {
        localStorage.removeItem(`${chatName}-messages`)

        setMessagesSide(false)
        
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

        let newChats = []
        chatNames.filter(name => name !== chatName ? newChats.push(name) : "")
        
        localStorage.setItem("chats", JSON.stringify(newChats))
        
        setChatNum("")
    }

    return (
        <div className="chat-header">
            {menuSide ? <><div className="chat-profile">
                <h2 className={classN}>{chatName.substring(0, 1)}</h2>
                <div className="chat-text">
                    <h6>{chatName}</h6>
                    <p>Online</p>
                </div>
            </div><div className="mt-3">
                    <IoCall onClick={() => setCallSide(<Call classN={classN} chats={chats}
                        setCallSide={setCallSide} callType="Calling..." />)}
                        className="chat-icons" />
                    <IoVideocam onClick={() => setCallSide(<Call classN={classN} chats={chats}
                        setCallSide={setCallSide} callType="VideoCalling..." />)}
                        className="chat-icons" />
                    <BsThreeDots onClick={() => setMenuSide(false)} className="chat-icons" />
                </div>
            {callSide}</> : 
            <div className="col-12 d-flex justify-content-between align-items-center">
                <div>
                    <button onClick={e => showProfile(e)}
                    className="btn btn-primary text-white">{chatName} Profile</button>
                    <button onClick={e => deleteHistory(e)}
                    className="btn btn-danger text-white mx-2">Delete History</button>
                    {blockButton ?<button onClick={e => block(e)}
                    className="btn btn-danger text-white">Block Chat</button> : 
                    <button onClick={e => {setBlockButton(true) 
                        setBlock(true)}}
                    className="btn btn-primary text-white">UnBlock Chat</button>}
                    <button onClick={e => removeChat(e)}
                    className="btn btn-danger text-white mx-2">Remove Chat</button>
                    {callSide}
                </div>
                <BsArrowReturnRight onClick={() => setMenuSide(true)}
                className="return-icon fs-2 text-white rounded-3 p-1" />
            </div>}
        </div> 
    )
}

export default ChatHeader
