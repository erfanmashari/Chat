import { BsArrowReturnRight } from "react-icons/bs"


const ContactProfile = ({ name, index, number, setCallSide }) => {
    const profileImage = JSON.parse(localStorage.getItem(`${name}-img`))

    let classN;
    switch (index % 6) {
        case 0:
            classN = "contact-img text-white bg-primary"
            break;
        case 1:
            classN = "contact-img text-white bg-secondary"
            break;
        case 2:
            classN = "contact-img text-white bg-danger"
            break;
        case 3:
            classN = "contact-img text-white bg-success"
            break;
        case 4:
            classN = "contact-img text-white bg-dark"
            break;
        case 5:
            classN = "contact-img text-white bg-warning"
            break;
        default:
            break;
    }

    return (
        <div className="contact-profile col-3 d-flex flex-column align-items-center text-white p-3">
            <div className="col-12 d-flex justify-content-end">
                <BsArrowReturnRight onClick={() => setCallSide("")}
                className="return-profile-icon fs-2 rounded-3 p-1" />
            </div>
            {profileImage !== null ? <img src={profileImage[0]} alt={profileImage[1]} className="call-image mb-2" /> :
            <h4 className={"call-image " + classN}>{name.substring(0,1)}</h4>}
            <h2>{name}</h2>
            <h3>{number}</h3>
        </div>
    )
}

export default ContactProfile
