import events from '../mocks/events.json'
import { useNavigate } from "react-router-dom";

function Events() {
    const navigate = useNavigate();
    const openEvents = events.filter(e => e.slots.filled < e.slots.total);

    return (
        <>
        <div className='p-2 h-full'>
            <div className='flex flex-row my-2'>
                <p>Total Raids open: {openEvents.length}</p>
            </div>
            {openEvents.map(e => (
                <div className='border mb-2 flex p-2 justify-center' key={e.id}>
                    <p className='w-1/4 text-start'>{e.raidName}</p>
                    {/* Needs timer to be added to countdown and show start and countdown */}
                    <p className='w-1/4'>{e.startsAt}</p>
                    <p className='w-1/4'>{e.slots.filled} / {e.slots.total} </p>
                    <div className='w-1/4 flex flex-col md:flex-row gap-2'>
                        <button className='button w-full border'>Join</button>
                        <button className='button w-full border'>DM Leader</button>
                    </div>
                </div>  
            ))}
        </div>
        </>
    )
}

export default Events;