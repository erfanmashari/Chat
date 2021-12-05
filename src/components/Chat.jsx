import { useState, useContext } from "react"
import { AppContext } from "../App"
import { RiSendPlaneFill } from "react-icons/ri"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"

const Chat = () => {
    const appContext = useContext(AppContext)

    const [menuSide, setMenuSide] = useState(true)

    // get day and time
    // const dayNum = new Date().getDay()
    // const hour = new Date().getHours()
    // const min = new Date().getMinutes()
    
    // set usestate
    const [text, setText] = useState("")

    const [block, setBlock] = useState(true)
    
    // get and show Message and save it to localStorage
    const getMessage = (e) => {
        if(text !== "") {
            appContext.messagesSide[1](true)
            
            setText("")
            
            let chatName
            let chatChildren;
            if(menuSide) {
                if (e.target.parentElement.id === "send-icons-div") {
                    chatName = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.firstChild.children[1].firstChild.textContent
                    chatChildren = e.target.parentElement.parentElement.parentElement.previousElementSibling.firstChild.children[2].children
                } else {
                    chatName = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.firstChild.children[1].firstChild.textContent
                    chatChildren = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstChild.children[2].children
            }} else {
                let headerButtons
                if (e.target.parentElement.id === "send-icons-div") {
                    headerButtons = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.firstChild.firstChild.firstChild.textContent.split(" ")
                    chatChildren = e.target.parentElement.parentElement.parentElement.previousElementSibling.firstChild.children[2].children
                } else {
                    headerButtons = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.firstChild.firstChild.firstChild.textContent.split(" ")
                    chatChildren = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstChild.children[2].children
                }
                const nameLength = headerButtons.length
                headerButtons.filter((e, index) => index !== nameLength -1 ? chatName = e : "")
            }
            
            appContext.profileName[1](chatName)

            let localData = localStorage.getItem(`${chatName}-messages`)
            if(localData === null) { 
                localData = [] 
            } else { 
                localData = JSON.parse(localData)
            }
                
            localData.unshift(text)

            localStorage.setItem(`${chatName}-messages`, JSON.stringify(localData))
            
            for (const key in chatChildren) {
                if (isNaN(key) === false) {
                    if(chatChildren[key].classList.contains(chatName)) {
                        chatChildren[key].firstChild.children[1].children[1].textContent = text
                    }
                }
            }
        }
    }
    
    return (<>
        {appContext.chatNum[0] !== "" ? 
        <div id="chats" className="bg-gray col-8 p-3">
            <ChatHeader setBlock={setBlock} menuSide={menuSide} setMenuSide={setMenuSide} />
            <Messages />
            {block ? <div className="send-message col-12">
                <input type="text" value={text} onChange={e => setText(e.target.value)} 
                placeholder="Type Your Message..." className="input col-9 p-1" />
                <div id="send-icons-div">
                    <RiSendPlaneFill  onClick={(e) => getMessage(e)} className="send-icon" />
                </div>
            </div> :
            <div className="col-12 d-flex justify-content-center align-items-center text-danger bg-white rounded-3 p-2">
                <h6>You Blocked This Chat!</h6>
            </div> }
            </div>
        :<div className="bg-gray col-8 d-flex justify-content-center align-items-center p-3">
        <h2>Choose A Chat</h2>
      </div>}</>
    )
}

export default Chat
