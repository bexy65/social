import { NavLink } from "react-router-dom";
import { navigation } from "../../src/config/navigation";

function BottomNav() {
    return (
        <nav className="border lg:border-none  h-16 lg:h-12 flex bg-blue-300 sticky inset-x-0 bottom-0">
            {navigation.map(item => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className="flex-1 h-full flex items-center justify-center border-r lg:border-none p-2 lg:hover:text-white lg:hover:scale-103 transition duration-200"
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    )
}

export default BottomNav