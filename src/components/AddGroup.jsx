import ChatCard from "./ChatCard"
import { useState } from "react"
import { MdOutlineAddAPhoto } from "react-icons/md"

const AddGroup = ({ setAddGroupSide, chats, setChats, setIsAdd, setChatTexts }) => {
    const [profileImg, setProfileImg] = useState(<MdOutlineAddAPhoto />)
    const [imgSource, setImgSource] = useState("")
    const [imgAlt, setImgAlt] = useState("")
    const [groupName, setGroupName] = useState("")

    const getImage = e => {
        const files = e.target.files

        for(const file of files) {
            setProfileImg(<img src={URL.createObjectURL(file)} alt={file.name} className="add-group-image" />)

            setImgSource(URL.createObjectURL(file))
            setImgAlt(file.name)
        }
    }

    const add = () => {
        if (groupName.length > 0) { 
            const chatsLocal = JSON.parse(localStorage.getItem("chats"))

            if (!chatsLocal.includes(groupName)) {
                if(imgSource !== "") {
                    localStorage.setItem(`${groupName}-img`, JSON.stringify([imgSource, imgAlt]))
                }
                
                setAddGroupSide("")  
                setChats([...chats, <ChatCard name={groupName} index={chats.length} />])
                setIsAdd(true) 
            } else {
                setAddGroupSide("")  
                alert("This Group/Contact already exist!")
            }
        } else {
            alert("Set Group Name!")
        }
    }

    return (
        <div className="add-group">
            
            <div className="d-flex justify-content-between">
                <div className="group-image-div">
                    <label htmlFor="group-image-input" className="col-3 image-input-label d-block bg-gray fs-3 mx-auto text-center">{profileImg}</label>
                    <input type="file" name="group-image-input" onChange={e => getImage(e)}
                    id="group-image-input" style={{display: "none"}} accept="image/png, image/jpeg" />
                </div>
                <div>
                    <button onClick={() => setAddGroupSide("")}
                    className="close-group-btn btn btn-danger text-white">X</button>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-between">
                <label>Group Name</label>
            </div>
            <input type="text" placeholder="Name" onChange={e => setGroupName(e.target.value)}
            className="input bg-gray col-12 mt-2 p-2" />
            <button onClick={() => add()}
            className="col-12 btn btn-primary mt-3">Create Group</button>
        </div>
    )
}

export default AddGroup
