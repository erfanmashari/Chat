import { useContext } from "react"
import { AppContext } from "../App"
import Message from "./Message"
// import { RiMessageLine } from "react-icons/ri"

const Messages = () => {
    const appContext = useContext(AppContext)

    let localData = ""
    if (appContext.profileName[0] !== "") {
        // get localData
        localData = JSON.parse(localStorage.getItem(`${appContext.profileName[0]}-messages`))
    }

    return (<>
        {appContext.messagesSide[0] ? <div className="messages col-12">
            {localData !== "" && localData !== null && localData.map((text, index) => <Message key={index} text={text} />)}
        </div> : 
        <div className="no-messages col-12"><h1>No Messages Yet!</h1></div>}
        </>
    )
}

export default Messages
