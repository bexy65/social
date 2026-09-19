import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="flex w-full h-12 lg:h-16 sticky gap-3 inset-x-0 top-0 bg-blue-300 m-0">
            <div className="border p-2 w-1/2 text-start">
                <p className="m-0 p-0 text-sm lg:text-xl">World Of Warcraft</p>
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