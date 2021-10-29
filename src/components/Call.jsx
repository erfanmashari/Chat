const Call = ({ callType, chats, setCallSide, classN, chatNum }) => {
    const chatName = chats[chatNum].props.name

    const profileImage = JSON.parse(localStorage.getItem(`${chatName}-img`))

    return (
        <div className="call col-3 d-flex flex-column align-items-center text-white p-3">
            {profileImage !== null ? <img src={profileImage[0]} alt={profileImage[1]} className="call-image" /> :
            <h2 className={"call-image " + classN}>{chatName.substring(0, 1)}</h2>}
            <h5 className="mt-3">{callType}</h5>
            <h3 className="text-white mt-2">{chatName}</h3>
            <h5 className="text-white mt-2">+98 990 123 1233</h5>
            <button onClick={() => setCallSide("")}
            className="col-12 btn btn-danger mt-5">Cancel</button>
        </div>
    )
}

export default Call
