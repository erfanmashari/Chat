const Message = ({ text, icon }) => {
    return (
        <div className="mb-3">
            <p className="message">{icon === undefined ? "" : icon}
                {text}</p>
        </div>
    )
}

export default Message
