import { useContext } from "react"
import { AppContext } from "../App"

const Login = () => {
    const appContext = useContext(AppContext)

    const chatUI = () => {
        if (appContext.username[0] !== "" && appContext.phone[0] !== "" && appContext.phone[0].length === 10 && appContext.country[0] !== "") {
            appContext.login[1](true)
        }
    }
    
    return (
        <div id="login" className="col-4 text-white bg-dark rounded-3 mt-5 mx-auto p-3">
            <label>Username</label>
            <input type="text" onChange={e => appContext.username[1](e.target.value)}
            placeholder="Username" className="input col-12 mt-2 mb-2 p-2" />
            <label className="col-12">Phone Number</label>
            <select type="number" onClick={e => appContext.country[1](e.target.value)}
            placeholder="Phone Number" className="input col-3 mt-2 mx-0 p-2">
                <option value="+1">US +1</option>
                <option value="+49">GE +49</option>
                <option value="+98">IR +98</option>
                <option value="+86">CH +86</option>
                <option value="+7">RU +7</option>
            </select>
            <input type="number"  onChange={e => appContext.phone[1](e.target.value)}
            placeholder="Phone Number" className="input col-9 mt-2 mx-0 p-2" />
            <button onClick={() => chatUI()}
            className="col-12 btn btn-primary mt-3">Login</button>
        </div>
    )
}

export default Login
