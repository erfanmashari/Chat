import Chat from "./Chat"
import Header from "./Header"
import { useState, useEffect } from "react"

const ChatMenu = ({ chats, setChats, setIsAdd, setChatTexts, setChatName, localChats }) => {
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
        setProfileName(chatName.props.name)
        setChatNum(chatNumber)
        setChatName(chatName.props.name)

        // get local data and check it
        const localData = localStorage.getItem(`${chatName.props.name}-messages`)
        if (localData === null) {
            setMessagesSide(false)
        } else {
            setMessagesSide(true)
        }
    }

    const searchChoose = (chatNumber, chatName) => {
        // setProfileName(chatName)
        // setChatNum(chatNumber)
        // setChatName(chatName)

        // // get local data and check it
        // const localData = localStorage.getItem(`${chatName}-messages`)
        // if (localData === null) {
        //     setMessagesSide(false)
        // } else {
        //     setMessagesSide(true)
        // }
    }
    
    useEffect(() => {
        setChatTexts(<Chat chatNum={chatNum} setChatNum={setChatNum}
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

    }, [chatNum, chats, messagesSide, profileName, search, searchResult, setChatTexts, setChats])

    return (
        <div id="chat-menu" className="chat-div col-3 vstack">
            <div className="chat-menu col-12 vstack bg-white rounded-3">
                <Header chats={chats} setChats={setChats} setOptions={setIsAdd}
             setChatTexts={setChatTexts} />
                <div className="px-3 py-2">
                    <input value={search} onChange={e => searchInput(e)}
                    type="text" placeholder="Search Chat" className="input bg-gray col-12 p-2"/>
                </div>
                <div id="chats-menu-div">
                    {showSearch ? searchResult.map((chat, index) => <div className={chat} key={index} onClick={e => searchChoose(index, chat)}><div>search</div></div>) : 
                    chats.map((chat, index) => <div className={chat.props.name} key={index} onClick={e => chatChoose(index, chat)}>{chat}</div>)}
                </div>
            </div>
        </div>
    )
}

export default ChatMenu
