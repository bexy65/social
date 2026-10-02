import { useNavigate } from "react-router-dom";

function Raid( {raid, ...props} ) {
    const navigate = useNavigate();

    let returnSize = (raidSizes) => {
        if(!raidSizes[1]) {
            return raidSizes[0];
        } 
        return  `${raidSizes[0]} - ${raidSizes[1]}`
    }

    function handleRaidInfo(raid) {
        navigate(`/raid/${raid.id}`);
    }

    return (
        <>
            <div className="border cursor-pointer lg:hover:-translate-y-2 transition ">
                <div onClick={()=>handleRaidInfo(raid)}>
                    <div className="flex flex-row items-center justify-between p-2">
                        <p className="">{raid.level}</p>
                        <label className="font-semibold text-start">{raid.name}</label>
                    </div>
                    <img
                        src={raid.image}
                        alt={raid.name}
                        className="w-full aspect-video object-cover"
                    />
                </div>
                <div className="text-end p-2">
                    <button onClick={()=>navigate(`/create/${raid.id}`)} className="border p-2 w-full lg:w-1/2">Create Event</button>
                </div>
            </div>
        </>
    ) 
}

export default Raid;