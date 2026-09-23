import { NavLink } from "react-router-dom";
import BottomNav from "./BottomNav";

function Header(){
    return (
        <div className="flex w-full h-12 sticky gap-3 justify-between inset-x-0 top-0 bg-blue-300 m-0">
            <div className=" p-2 w-1/4 text-start flex items-center">
                <NavLink to={'/'}> World Of Warcraft </NavLink>
            </div>
            <div className="hidden lg:block w-2/4">
                <BottomNav />
            </div>
            <div className=" p-2 w-1/4 text-end">
                <button className="px-2 py-1 border lg:hover:text-white transition duration-200">
                    <NavLink to={'/login'}> Login </NavLink>
                </button>
            </div>
        </div>
    )
}

export default Header;