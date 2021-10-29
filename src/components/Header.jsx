import { useState } from "react"
import AddGroup from "./AddGroup"
import { MdGroup } from "react-icons/md"

const Header = ({ chats, setChats, setIsAdd, setChatTexts }) => {
    const [addGroupSide, setAddGroupSide] = useState("")
    
    return (
        <div className="col-12 d-flex justify-content-between align-items-center p-3">
            <h3>Chats</h3>
            <div>
                <MdGroup onClick={() => setAddGroupSide(<AddGroup setChats={setChats} setIsAdd={setIsAdd}
                chats={chats} setAddGroupSide={setAddGroupSide}
                setChatTexts={setChatTexts} />)}
                className="menu-header-icon bg-gray rounded-3 p-1 fs-2" />
            </div>
            {addGroupSide}
        </div>
    )
}

export default Header;
