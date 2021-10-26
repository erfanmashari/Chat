const Call = ({ callType, chats, setCallSide, classN }) => {
    return (
        <div className="call col-3 d-flex flex-column align-items-center text-white p-3">
            <h2 style={{width: "80px", height: "80px", marginTop: "20px"}} class={classN}>{chats[0].props.name.substring(0, 1)}</h2>
            <h5 className="mt-3">{callType}</h5>
            <h3 className="text-white mt-2">{chats[0].props.name}</h3>
            <h5 className="text-white mt-2">+98 990 123 1233</h5>
            <button onClick={() => setCallSide("")}
            className="col-12 btn btn-danger mt-5">Cancel</button>
        </div>
    )
}

export default Call
