import events from '../mocks/events.json'
import { useNavigate } from "react-router-dom";
import { formatDate } from '../utils/helpers';

function Events() {
    const navigate = useNavigate();
    const openEvents = events.filter(e => e.slots.filled < e.slots.total);

    //Make custom hooks later!
    function handleDMLeader() {
        console.log("DM'ing leader!!!");
    }
    
    function handleJoinRequest() {
        console.log("Sending join request !!!");
    }

    return (
        <>
        <div className='max-w-2xl mx-auto px-2 mt-4 flex flex-col gap-3 text-md lg:text-lg '>
            {openEvents.map(e => (
                <div className='flex flex-row gap-2 justify-center items-center text-start py-3 px-2 border' key={e.id}>

                    <div className='w-1/4'>
                        <p className=' cursor-pointer hover:text-gray-400' onClick={()=>navigate(`/event/${e.id}`)}>
                            {e.raidName}
                        </p>
                    </div>

                    <p className='w-1/4'>{formatDate(e.startsAt)}</p>

                    <p className='w-1/4'>{e.slots.filled} / {e.slots.total} </p>

                    <div className='w-1/4 flex flex-col md:flex-row gap-2'>
                        <button onClick={handleJoinRequest} className='button w-full border'>
                            <i className="fa-solid fa-square-plus"></i>
                        </button>

                        {/* open modal to text to event creater */}
                        <button onClick={handleDMLeader} className='button w-full border'>
                            <i className="fa-regular fa-envelope"></i>
                        </button>
                    </div>

                </div>  
            ))}
        </div>
        </>
    )
}

export default Events;