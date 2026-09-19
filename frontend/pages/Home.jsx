import { useState } from "react";
import AccountMenu from "../components/AccountMenuDropdown";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/SideBar";
import Posts from "../components/Posts";
function Home() {
    return (
        <>
            <div className="flex h-[calc(100vh-4rem)]">

                <Posts />
                
            </div>
        </>
    )
}

export default Home;