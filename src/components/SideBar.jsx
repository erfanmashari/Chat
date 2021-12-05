import { useContext } from "react";
import { AppContext } from "../App.js"
import ChatMenu from "./ChatMenu";
import Profile from "./Profile";
import Contacts from "./Contacts";
import { BsChatDots, BsPerson, BsPower } from 'react-icons/bs'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'

const SideBar = () => {
    const appContext = useContext(AppContext)
    
    const setOptions = appContext.options[1]

    return (
        <div className="side-bar bg-white col-1 vstack d-flex justify-content-between align-items-center m-0 p-0">
            <div>
                <BsChatDots className="top-icon" />
                <IoChatboxEllipsesOutline onClick={() => setOptions(<ChatMenu />)} className="icons active-icons" />
                <BsPerson onClick={() => setOptions(<Contacts />)}
                className="icons active-icons" />
                <CgProfile onClick={() => setOptions(<Profile />)} className="icons active-icons" />
            </div>
            <div>
                <BsPower className="icons" />
            </div>
        </div>
    )
}

export default SideBar
