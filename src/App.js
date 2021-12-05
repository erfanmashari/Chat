import SideBar from "./components/SideBar";
import ChatMenu from "./components/ChatMenu";
import ChatCard from "./components/ChatCard";
import Login from "./components/Login";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";

export const AppContext = React.createContext()

function App() {
  // login state
  const [login, setLogin] = useState(true)

  // chat side
  const [chatTexts, setChatTexts] = useState(
    <div className="bg-gray col-8 d-flex justify-content-center align-items-center p-3">
      <h2>Choose A Chat</h2>
    </div>
  )

  const [addGroupSide, setAddGroupSide] = useState("")

  // chat name
  const [chatName, setChatName] = useState()

  // Login info
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  
  // get chats from localstorage
  const data = localStorage.getItem("chats")
  const [localChats, setLocalChats] = useState(
    data === undefined || data === null || data === "undefined" ? [] : JSON.parse(data)
  )
  
  // show chats in chatmenu
  const [chats, setChats] = useState(
    JSON.stringify(localChats) === "[]" ? [] :
    localChats.map((chat, index) => <ChatCard name={chat} index={index} />)
  )

  // a trick for chat menu
  const [isAdd, setIsAdd] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false)

  // reload chat menu
  const [options, setOptions] = useState(<ChatMenu />)

  if (isAdd) {
    setOptions(<ChatMenu />)
      
    // get local storage data
    let localData = localStorage.getItem("chats")
    if (localData === null || localData === undefined || localData === "undefined") {
      localData = []
    } else {
      localData = JSON.parse(localData)
    }


    // set new inner chat
    chats.map(chat => {
      setLocalChats([...localData, chat.props.name])
      return "y";
    })

    setIsAdd(false)
  }

  if(isRemoved) {
    const names = chats.map(chat => chat.props.name)
    
    localStorage.setItem("chats", JSON.stringify(names))

    setOptions(<Profile username={username} phone={phone} country={country} />)
    setIsRemoved(false)
  }

  // some of ChatMenu states
  const [profileName, setProfileName] = useState("")
  const [chatNum, setChatNum] = useState("")
  const [messagesSide, setMessagesSide] = useState(false)

  // set localstorage after rendering
  useEffect(() => {
      localStorage.setItem("chats", JSON.stringify(localChats))
    }, [chatName, localChats])
    
  return (
    <AppContext.Provider value={{ isRemoved: [isRemoved, setIsRemoved], options: [options, setOptions], addGroupSide: [addGroupSide, setAddGroupSide], 
    chats: [chats, setChats], chatTexts: [chatTexts, setChatTexts], isAdd: [isAdd, setIsAdd], chatName: [chatName, setChatName], 
    login: [login, setLogin], username: [username, setUsername], phone: [phone, setPhone], country: [country, setCountry],
    profileName: [profileName, setProfileName], chatNum: [chatNum, setChatNum], messagesSide: [messagesSide, setMessagesSide] }} >
      <div className="row mt-5">
        {login ? <>
            <SideBar />
            {options}
            {chatTexts}
          </>   : <><Login /></>
        }
      </div>
    </AppContext.Provider>
  );
}

export default App;
