import { useContext } from "react"
import { AppContext } from "../App"
import AddGroup from "./AddGroup"
import { MdGroup } from "react-icons/md"

const Header = () => {
    const appContext = useContext(AppContext)

    return (
        <div className="col-12 d-flex justify-content-between align-items-center p-3">
            <h3>Chats</h3>
            <div>
                <MdGroup onClick={() => appContext.addGroupSide[1](<AddGroup />)}
                className="menu-header-icon bg-gray rounded-3 p-1 fs-2" />
            </div>
            {appContext.addGroupSide[0]}
        </div>
    )
}

export default Header;
