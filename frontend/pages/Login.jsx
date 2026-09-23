import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login, isLoggedIn }  = useAuth();

    useEffect(()=> {
        if(isLoggedIn){
            navigate('/events');
            return;
        }
    },[isLoggedIn]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrorMsg] = useState("");

    const message = error ?? "";

    const handleLogin = async () => {
        if(!email || !password){
            setErrorMsg("Please fill fields");
            return;
        } 

        if(await login(email, password)) {
            navigate('/events')
        } else {
            setErrorMsg("Error on login")
        }
    };

    return (
        <div className="max-w-xl mx-auto my-4">
            <div className="flex flex-col gap-4 p-2 justify-between h-full">
                {message ?? (
                    <p className="border p-2">
                        {message}
                    </p>
                )}
                <input onChange={(e)=>setEmail(e.target.value)} className="border-b" type="text" name="email" id="email" placeholder="Email.." />
                <input onChange={(e)=>setPassword(e.target.value)} className="border-b" type="password" name="password" id="password" placeholder="password.." />
                <button className="self-end border p-2" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;