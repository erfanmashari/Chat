const ChatCard = ({ name, index }) => {
    const c = JSON.parse(localStorage.getItem(`${name}-messages`))
    
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
            <h4 className={classN}>{name.substring(0, 1)}</h4>
            <div className="card-text">
                <h5>{name}</h5>
                <p>{c !== null ? c[0] : ""}</p>
            </div>
        </div>
    )
}

export default ChatCard
