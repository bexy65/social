import { useState } from "react";
import AccountMenu from "../components/AccountMenuDropdown";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/SideBar";
function Home() {
    return (
        <>
            <div className="h-screen overflow-hidden shadow-element">

                <Header />

                <div className="flex h-[calc(100vh-4rem)]">

                    <Sidebar />

                    <main className="flex-1 overflow-y-auto">
                        <div className="border text-start sticky p-2">
                            <div className="m-0 border">what u think?</div>
                            <div className="border">
                                <p>button section</p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl p-6">

                        </div>
                    </main>

                    <aside className="w-64 border-l">
                        Sidebar info panel ? 
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Home;