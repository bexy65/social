import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Register() {
    const navigate = useNavigate();
    const { register, isLoggedIn }  = useAuth();

    useEffect(()=> {
        if(isLoggedIn){
            navigate('/events');
            return;
        }
    },[isLoggedIn]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setErrorMsg] = useState("");

    const message = error ?? "";

    const handleRegister = async () => {
        if(!email || !password || !username){
            setErrorMsg("Fields are required please fill!");
            return;
        }

        if(password !== confirmPassword){
            setErrorMsg("Passwords must match");
            return;
        } 

        let registeredUser = await register(email, password);
        if(registeredUser) {
            navigate('/login')
        } else {
            setErrorMsg("Error on register!")
        }
    };

    return (
        <div className="max-w-md mx-auto mt-4">
            <div className="flex flex-col gap-4 p-2 border justify-between h-full">
                {message ?? (
                    <p className="border p-2">
                        {message}
                    </p>
                )}
                <input onChange={(e)=>setUsername(e.target.value)} className="border-b" type="text" name="username" id="username" placeholder="Username.." />
                <input onChange={(e)=>setEmail(e.target.value)} className="border-b" type="text" name="email" id="email" placeholder="Email.." />
                <div className="flex flex-col lg:flex-row gap-2">
                    <input onChange={(e)=>setPassword(e.target.value)} className="border-b w-full" type="password" name="password" id="password" placeholder="password.." />
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} className="border-b w-full" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password .." />
                </div>
                <button className="self-end border p-2" onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}

export default Register;