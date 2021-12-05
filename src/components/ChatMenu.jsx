import Chat from "./Chat";
import ChatCard from "./ChatCard";
import Header from "./Header";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App.js";

const ChatMenu = () => {
    const [search, setSearch] = useState([])
    const [searchResult, setSearchResult] = useState("")
    const [showSearch, setShowSearch] = useState(false)

    const searchInput = e => {
        setSearch(e.target.value)
    }

    const appContext = useContext(AppContext)
    // console.log(appContext)
    
    const chatChoose = (chatNumber, chatName) => {
        // const chatsArray = JSON.parse(localStorage.getItem("chats"))

        // const newChats = []
        // chats.filter(names => chatsArray.map(chat =>
        //     names.props.name === chat ? newChats.push(names) : ""
        // ))
        
        // setChats(newChats)
        appContext.profileName[1](chatName.props.name)
        appContext.chatNum[1](chatNumber)
        // setChatName(chatName.props.name)
        
        // get local data and check it
        const localData = localStorage.getItem(`${chatName.props.name}-messages`)
        if (localData === null) {
            appContext.messagesSide[1](false)
        } else {
            appContext.messagesSide[1](true)
        }

        // const newChatsLocal = newChats.map(chat => chat.props.name)
        
        // localStorage.setItem("chats", JSON.stringify(newChatsLocal))
    }

    const searchChoose = (chatNumber, chatNameValue) => {
        appContext.profileName[1](chatNameValue)
        appContext.chatNum[1](chatNumber)
        appContext.chatName[1](chatNameValue)

        // get local data and check it
        const localData = localStorage.getItem(`${chatNameValue}-messages`)
        if (localData === null) {
            appContext.messagesSide[1](false)
        } else {
            appContext.messagesSide[1](true)
        }
    }
    
    useEffect(() => {
        appContext.chatTexts[1](<Chat />)
        if (search.length > 0) {
            appContext.chats[0].map(chat => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, searchResult])
    
    return (
        <div id="chat-menu" className="chat-div col-3 vstack">
            <div className="chat-menu col-12 vstack bg-white rounded-3">
                <Header />
                <div className="px-3 py-2">
                    <input value={search} onChange={e => searchInput(e)}
                    type="text" placeholder="Search Chat" className="input bg-gray col-12 p-2"/>
                </div>
                <div id="chats-menu-div">
                    {showSearch ? searchResult.map((chat, index) => <div className={chat} key={index} onClick={e => searchChoose(index, chat)}><div>search</div></div>) : 
                    appContext.chats[0].map((chat, index) => <div className={chat.props.name} key={index} onClick={e => chatChoose(index, chat)}>
                        <ChatCard name={chat.props.name} index={index}
                        img={localStorage.getItem(`${chat.props.name}-img`) !== null ? JSON.parse(localStorage.getItem(`${chat.props.name}-img`)) : ""} />
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default ChatMenu
