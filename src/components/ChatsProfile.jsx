import imageVictor from "../img/image-victor.jpg"

const ChatsProfile = () => {
    return (
        <div className="chat-div col-3 vstack">
            <div className="chat-menu col-12 vstack d-flex justify-content-between bg-white rounded-3 p-3">
                    <img src={imageVictor} alt="profile-img" className="profile-image mt-4 mx-auto" />
                    {/* <h3 className="mt-3 mx-auto">{appContext.username[0]}</h3>
                    <h4 className="mt-3 mx-auto">{appContext.country[0]} {appContext.phone[0]}</h4> */}
                    <h5 className="mt-2">Bio</h5>
                    <p className="mt-1">Bio</p>
                    <h5 className="mt-2">ID</h5>
                    <p className="mt-1">ID</p>
                    <h5 className="mt-2">login time</h5>
                    <p className="mt-1">login time</p>
            </div>
        </div>
    )
}

export default ChatsProfile
