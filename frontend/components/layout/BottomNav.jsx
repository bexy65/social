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
                <button className="w-1/4 m-0 h-full flex items-center text-center border-r p-2" key={e} onClick={()=>console.log('clicked')} type="button">
                    <p className="m-0 p-0 w-full">{e}</p>
                </button>
             )
            )}
        </div>
    )
}

export default BottomNav