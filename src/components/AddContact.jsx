import { useState } from "react"

const AddContact = ({ setAddContacts, contacts, setContacts, localContacts, setLocalContacts }) => {
    const [contactName, setContactName]= useState("")

    const add = () => {
        const chatsLocal = JSON.parse(localStorage.getItem("chats"))

        if (contactName.length > 0) { 
            if (!chatsLocal.includes(contactName)) {
                setContacts([...contacts, contactName])
                setLocalContacts([...localContacts, contactName])

                setAddContacts("")
            } else {
                setAddContacts("")  
                alert("This Group/Contact already exist!")
            }
        } else {
            alert("Set Contact Name!")
        }
    }

    return (
        <div className="add-contact">
            <div className="col-12 d-flex justify-content-between">
                <label>Contact Name</label>
                <button onClick={() => setAddContacts("")}
                className="close-group-btn btn btn-danger text-white">X</button>
            </div>
            <input type="text" placeholder="Name" onChange={e => setContactName(e.target.value)}
            className="input bg-gray col-12 mt-2 p-2" />
            <button onClick={() => add()}
            className="col-12 btn btn-primary mt-3">Add Contact</button>
        </div>
    )
}

export default AddContact
