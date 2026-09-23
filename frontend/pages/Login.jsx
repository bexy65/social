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
        <div className="max-w-md mx-auto mt-4 border">
            <div className="flex flex-col gap-4 p-2 justify-between h-full">
                {message ?? (
                    <p className="border p-2">
                        {message}
                    </p>
                )}
                <input onChange={(e)=>setEmail(e.target.value)} className="border-b" type="text" name="email" id="email" placeholder="Email.." />
                <input onChange={(e)=>setPassword(e.target.value)} className="border-b" type="password" name="password" id="password" placeholder="password.." />
                <div className="flex flex-row gap-2 justify-between">
                    <button className="border p-2 w-full lg:w-1/4" onClick={handleLogin}>Login</button>
                    <button className="border p-2 w-full lg:w-1/4" onClick={()=>navigate('/register')}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;