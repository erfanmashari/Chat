import { useState, useEffect, useContext } from "react"
import { AppContext } from "../App"
import ChatCard from "./ChatCard"
import AddContact from "./AddContact"
import { MdPersonAddAlt1 } from "react-icons/md"

const Contacts = () => {
    const appContext = useContext(AppContext)

    // get contacts from localstorage
    const data = localStorage.getItem("contacts")
    const [localContacts, setLocalContacts] = useState(
        data === undefined || data === null || data === "undefined" ? [] : JSON.parse(data)
    )
    
    // show contacts in chatmenu
    const [contacts, setContacts] = useState(localContacts)
    // .map((contact, index) => <div key={index} onClick={() => addToChats(contact, index)}>
    //                     <ChatCard name={contact} index={index} img="" deleteIcon={true} />
    //                 </div>)
    const [addContacts, setAddContacts] = useState("")

    const addToChats = (e, name) => {
        const chatsLocal = JSON.parse(localStorage.getItem("chats"))
        
        if(!chatsLocal.includes(name)) {
            if(e.target.parentElement.classList.contains("delete-icon") === false) {
                appContext.addGroupSide[1]("")  
                appContext.chats[1]([...appContext.chats[0], <ChatCard name={name} index={appContext.chats[0].length} />])
                appContext.isAdd[1](true)
            }
        }
    }

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }, [contacts])

    return (
        <div className="chat-div col-3 vstack">
            <div className="chat-menu col-12 vstack bg-white rounded-3">
                <div className="col-12 d-flex justify-content-between align-items-center p-3">
                    <h3>Contacts</h3>
                    <div>
                        <MdPersonAddAlt1 onClick={e => setAddContacts(<AddContact contacts={contacts}
                        setContacts={setContacts} setAddContacts={setAddContacts}
                        localContacts={localContacts} setLocalContacts={setLocalContacts} />)}
                        className="menu-header-icon bg-gray rounded-3 p-1 fs-2" />
                    </div>
                    {addContacts}
                </div>
                <div className="px-3 py-2">
                    <input type="text" placeholder="Search Contact" className="input bg-gray col-12 p-2"/>
                </div>
                <div id="chats-menu-div">
                    {localContacts.map((chat, index) => <div className={chat} key={index} onClick={e => addToChats(e, chat, index)}>
                        <ChatCard name={chat} index={index} img="" deleteIcon={true} />
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Contacts
