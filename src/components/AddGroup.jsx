import ChatCard from "./ChatCard"
import { useState } from "react"

const AddGroup = ({ setAddGroupSide, chats, setChats, textArray, setOptions, setTextArray, setChatTexts }) => {
    const [groupName, setGroupName] = useState("")

    const add = () => {
        if (groupName.length > 0) { 
            setAddGroupSide("")  
            setChats([...chats, <ChatCard name={groupName} textArray={textArray} />])
            setOptions(true)
        } else {
            alert("Set Group Name!")
        }
    }

    return (
        <div className="add-group">
            <div className="col-12 d-flex justify-content-between">
                <label>Group Name</label>
                <button onClick={() => setAddGroupSide("")}
                className="btn btn-danger text-white p-0 px-2">X</button>
            </div>
            <input type="text" placeholder="Name" onChange={e => setGroupName(e.target.value)}
            className="input bg-gray col-12 mt-2 p-2" />
            <button onClick={() => add()}
            className="col-12 btn btn-primary mt-3">Create Group</button>
        </div>
    )
}

export default AddGroup
