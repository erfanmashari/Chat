import Chat from "./Chat"
import ChatCard from "./ChatCard"
import Header from "./Header"
import { useState, useEffect } from "react"

const ChatMenu = ({ chats, setChats, setIsAdd, setChatTexts, setChatName, setIsRemoved, addGroupSide, setAddGroupSide }) => {
    let [search, setSearch] = useState([])
    let [searchResult, setSearchResult] = useState("")
    let [profileName, setProfileName] = useState("")
    let [chatNum, setChatNum] = useState("")
    const [messagesSide, setMessagesSide] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const searchInput = e => {
        setSearch(e.target.value)
    }


    
    const chatChoose = (chatNumber, chatName) => {
        // const chatsArray = JSON.parse(localStorage.getItem("chats"))

        // const newChats = []
        // chats.filter(names => chatsArray.map(chat =>
        //     names.props.name === chat ? newChats.push(names) : ""
        // ))
        
        // setChats(newChats)

        setProfileName(chatName.props.name)
        setChatNum(chatNumber)
        // setChatName(chatName.props.name)
        
        // get local data and check it
        const localData = localStorage.getItem(`${chatName.props.name}-messages`)
        if (localData === null) {
            setMessagesSide(false)
        } else {
            setMessagesSide(true)
        }

        // const newChatsLocal = newChats.map(chat => chat.props.name)
        
        // localStorage.setItem("chats", JSON.stringify(newChatsLocal))
    }

    const searchChoose = (chatNumber, chatName) => {
        setProfileName(chatName)
        setChatNum(chatNumber)
        setChatName(chatName)

        // get local data and check it
        const localData = localStorage.getItem(`${chatName}-messages`)
        if (localData === null) {
            setMessagesSide(false)
        } else {
            setMessagesSide(true)
        }
    }
    
    useEffect(() => {
        setChatTexts(<Chat chatNum={chatNum} setChatNum={setChatNum} setIsRemoved={setIsRemoved}
            chats={chats} setChats={setChats} profileName={profileName} 
            setProfileName={setProfileName} messagesSide={messagesSide} setMessagesSide={setMessagesSide} />)

        if (search.length > 0) {
            chats.map(chat => {
                if(chat.props.name.includes(search)) { 
                    setSearchResult([...searchResult, chat.props.name]) 
                    setShowSearch(true)
                }
                return "y";
                }
            )
        } else {
            setShowSearch(false)
        }
    }, [chatNum, chats, messagesSide, profileName, search, searchResult, setChatTexts, setChats, setIsRemoved])
    
    return (
        <div id="chat-menu" className="chat-div col-3 vstack">
            <div className="chat-menu col-12 vstack bg-white rounded-3">
                <Header chats={chats} setChats={setChats} setIsAdd={setIsAdd}
                addGroupSide={addGroupSide} setAddGroupSide={setAddGroupSide}  />
                <div className="px-3 py-2">
                    <input value={search} onChange={e => searchInput(e)}
                    type="text" placeholder="Search Chat" className="input bg-gray col-12 p-2"/>
                </div>
                <div id="chats-menu-div">
                    {showSearch ? searchResult.map((chat, index) => <div className={chat} key={index} onClick={e => searchChoose(index, chat)}><div>search</div></div>) : 
                    chats.map((chat, index) => <div className={chat.props.name} key={index} onClick={e => chatChoose(index, chat)}>
                        <ChatCard name={chat.props.name} index={index}
                        img={localStorage.getItem(`${chat.props.name}-img`) !== null ? JSON.parse(localStorage.getItem(`${chat.props.name}-img`)) : ""} />
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default ChatMenu
