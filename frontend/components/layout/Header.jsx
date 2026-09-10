import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="flex w-full sticky gap-3">
            <div className="border p-2 w-1/2 text-start">
                <h2 className="m-0 p-0">World Of Warcraft</h2>
            </div>
            <div className="border p-2 w-1/2 text-end">
                <button className="px-2 py-1 border rounded-md">
                    <NavLink to={'/login'}> Login </NavLink>
                </button>
            </div>
        </div>
    )
}

export default Header;