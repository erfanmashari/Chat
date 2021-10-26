// import { RiMessageLine } from "react-icons/ri"
import Message from "./Message"

const Messages = ({ profileName, messagesSide }) => {
    let localData = ""
    if (profileName !== "") {
        // get localData
        localData = JSON.parse(localStorage.getItem(`${profileName}-messages`))
    }

    return (<>
        {messagesSide ? <div className="messages col-12">
            {localData !== "" && localData !== null && localData.map((text, index) => <Message key={index} text={text} />)}
        </div> : 
        <div className="no-messages col-12"><h1>No Messages Yet!</h1></div>}
        </>
    )
}

export default Messages
