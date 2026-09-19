import { useState } from "react"

const navArray = [
    'Find',
    'Raids',
    '+',
    'Events',
    'Me'
]

function BottomNav() {
    const [nav, setNav] = useState(navArray);
    return (
        <div className="border h-16 flex items-center m-0 sticky inset-x-0 bottom-0 bg-blue-300">
            {nav.map((e)=>(
                <div className="w-1/4 m-0 h-full flex items-center border-r p-2" key={e}>
                   <p className="m-0 p-0 w-full">{e}</p>
                </div>
             )
            )}
        </div>
    )
}

export default BottomNav