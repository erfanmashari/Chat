import SideBar from "./components/SideBar";
import ChatMenu from "./components/ChatMenu";
import ChatCard from "./components/ChatCard";
import Login from "./components/Login";
import { useState, useEffect } from "react";

function App() {
  // login state
  const [login, setLogin] = useState(true)

  // chat side
  const [chatTexts, setChatTexts] = useState(
    <div className="bg-gray col-8 d-flex justify-content-center align-items-center p-3">
      <h2>Choose A Chat</h2>
    </div>
  )

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

  // reload chat menu
  const [options, setOptions] = useState(<ChatMenu 
    chats={chats} setChats={setChats} setChatTexts={setChatTexts} setIsAdd={setIsAdd}
    setChatName={setChatName} localChats={localChats} />)

  if (isAdd) {
    setOptions(<ChatMenu chats={chats} 
      setChats={setChats} setChatTexts={setChatTexts} setIsAdd={setIsAdd} 
      setChatName={setChatName} localChats={localChats} />)
      
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
  // set localstorage after rendering
  useEffect(() => {
      localStorage.setItem("chats", JSON.stringify(localChats))
    }, [chatName, localChats])
    
  return (
    <div className="row mt-5">
      {login ? <>
          <SideBar setOptions={setOptions} 
          chats={chats} setChats={setChats} setChatTexts={setChatTexts} setIsAdd={setIsAdd}
          setChatName={setChatName} username={username} phone={phone} country={country} />
          {options }
          {chatTexts}
        </>   : <><Login setLogin={setLogin} username={username} setUsername={setUsername}
        phone={phone} setPhone={setPhone} country={country} setCountry={setCountry} /> </>
      }
    </div>
  );
}

export default App;
