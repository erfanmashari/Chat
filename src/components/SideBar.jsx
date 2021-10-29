import ChatMenu from "./ChatMenu";
import Profile from "./Profile";
import Contacts from "./Contacts";
import { BsChatDots, BsPerson, BsPower } from 'react-icons/bs'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'

const SideBar = ({ setChatName, setOptions, setChatTexts, chats, setChats, setIsAdd, setIsRemoved, localChats, username, phone, country, addGroupSide, setAddGroupSide }) => {
    return (
        <div className="side-bar bg-white col-1 vstack d-flex justify-content-between align-items-center m-0 p-0">
            <div>
                <BsChatDots className="top-icon" />
                <IoChatboxEllipsesOutline onClick={() => setOptions(<ChatMenu setChatTexts={setChatTexts} 
                chats={chats} setChats={setChats} setIsRemoved={setIsRemoved} addGroupSide={addGroupSide} setAddGroupSide={setAddGroupSide}
                setIsAdd={setIsAdd} setChatName={setChatName} localChats={localChats} />)} className="icons active-icons" />
                <BsPerson onClick={() => setOptions(<Contacts setChatTexts={setChatTexts} setAddGroupSide={setAddGroupSide}
                chats={chats} setChats={setChats} setIsRemoved={setIsRemoved} setIsAdd={setIsAdd} />)}
                className="icons active-icons" />
                <CgProfile onClick={() => setOptions(<Profile username={username}
                phone={phone} country={country} />)} className="icons active-icons" />
            </div>
            <div>
                <BsPower className="icons" />
            </div>
        </div>
    )
}

export default SideBar
