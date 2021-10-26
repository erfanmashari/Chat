import ChatMenu from "./ChatMenu";
import Profile from "./Profile";
import { BsChatDots, BsPerson, BsStar, BsPower } from 'react-icons/bs'
import { IoChatboxEllipsesOutline, IoSettingsOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'

const SideBar = ({ setChatName, setOptions, textArray, setTextArray, setChatTexts, chats, setChats, setIsAdd, localChats, username, phone, country }) => {
    return (
        <div className="side-bar col-1 vstack d-flex justify-content-between align-items-center m-0 p-0">
            <div>
                <BsChatDots className="top-icon" />
                <IoChatboxEllipsesOutline onClick={() => setOptions(<ChatMenu setChatTexts={setChatTexts} 
                textArray={textArray} setTextArray={setTextArray} chats={chats} setChats={setChats} 
                setIsAdd={setIsAdd} setChatName={setChatName} localChats={localChats} />)} className="icons active-icons" />
                <BsPerson className="icons" />
                <BsStar className="icons" />
            </div>
            <div>
                <CgProfile onClick={() => setOptions(<Profile username={username}
                phone={phone} country={country} />)} className="icons active-icons" />
                <IoSettingsOutline className="icons" />
                <BsPower className="icons" />
            </div>
        </div>
    )
}

export default SideBar
