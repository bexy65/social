import { useState } from "react";
import AccountMenu from "../components/AccountMenuDropdown";
function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="h-screen overflow-hidden shadow-element">
                <div className="flex w-full sticky gap-3">
                    <div className="border p-2 w-1/2 text-start"><h2 className="m-0 p-0">World Of Warcraft</h2></div>
                    <div className="border p-2 w-1/2 text-end">
                        <AccountMenu />
                    </div>
                </div>
                <div className="flex h-[calc(100vh-4rem)]">

                    <aside className="w-64 border-r">
                        Sidebar
                    </aside>

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
                        Sidebar
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Home;