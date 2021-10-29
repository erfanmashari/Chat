import { MdDelete } from "react-icons/md"

const ChatCard = ({ name, index, img, deleteIcon }) => {
    const c = JSON.parse(localStorage.getItem(`${name}-messages`))
    
    const removeContact = e => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

        const contactName = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.textContent
        
        const localData = JSON.parse(localStorage.getItem("contacts"))

        let newLocal = []
        localData.map(contact => contactName !== contact ? newLocal.push(contact) : "")
        
        localStorage.setItem("contacts", JSON.stringify(newLocal))
    }
    
    let classN;
    switch (index % 6) {
        case 0:
            classN = "card-img text-white bg-primary"
            break;
        case 1:
            classN = "card-img text-white bg-secondary"
            break;
        case 2:
            classN = "card-img text-white bg-danger"
            break;
        case 3:
            classN = "card-img text-white bg-success"
            break;
        case 4:
            classN = "card-img text-white bg-dark"
            break;
        case 5:
            classN = "card-img text-white bg-warning"
            break;
        default:
            break;
    }
    
    return (
        <div className="chat-card">
            {img !== "" ? <img src={img[0]} alt={img[1]} className="chat-image" /> : 
            <h4 className={classN}>{name.substring(0, 1)}</h4>}
            <div className="card-text">
                <div className="chat-card-header d-flex justify-content-between">
                    <h5>{name}</h5>
                    {deleteIcon ? <MdDelete onClick={e => removeContact(e)} className="delete-icon fs-3" /> : ""}
                </div>
                <p>{deleteIcon ? "" : c !== null ? c[0] : ""}</p>
            </div>
        </div>
    )
}

export default ChatCard
