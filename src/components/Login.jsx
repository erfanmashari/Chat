const Login = ({ setLogin, username, setUsername, phone, setPhone, country, setCountry }) => {
   

    const chatUI = () => {
        if (username !== "" && phone !== "" && phone.length === 10 && country !== "") {
            setLogin(true)
        }
    }
    
    return (
        <div id="login" className="col-4 text-white bg-dark rounded-3 mt-5 mx-auto p-3">
            <label>Username</label>
            <input type="text" onChange={e => setUsername(e.target.value)}
            placeholder="Username" className="input col-12 mt-2 mb-2 p-2" />
            <label className="col-12">Phone Number</label>
            <select type="number" onClick={e => setCountry(e.target.value)}
            placeholder="Phone Number" className="input col-3 mt-2 mx-0 p-2">
                <option value="+1">US +1</option>
                <option value="+49">GE +49</option>
                <option value="+98">IR +98</option>
                <option value="+86">CH +86</option>
                <option value="+7">RU +7</option>
            </select>
            <input type="number"  onChange={e => setPhone(e.target.value)}
            placeholder="Phone Number" className="input col-9 mt-2 mx-0 p-2" />
            <button onClick={() => chatUI()}
            className="col-12 btn btn-primary mt-3">Login</button>
        </div>
    )
}

export default Login
