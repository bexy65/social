import { useState } from "react";
import AccountMenu from "../components/AccountMenuDropdown";
function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="h-screen overflow-hidden">
                <div className="flex w-full sticky gap-3 my-2">
                    <div className="border p-2 w-1/3"> World Of Warcraft </div>
                    <div className="p-2 w-1/3"></div>
                    <div className="border p-2 w-1/3 text-end">
                        <AccountMenu />
                    </div>
                </div>
                <div className="flex h-[calc(100vh-4rem)] border">

                    <aside className="w-64 border-r">
                        Sidebar
                    </aside>

                    <main className="flex-1 overflow-y-auto">
                        <div className="mx-auto max-w-2xl p-6">
                   
                        </div>
                    </main>

                    <aside className="w-64 border-l">
                        Sidebar
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Home;