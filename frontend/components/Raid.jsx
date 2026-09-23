import { useState } from "react";
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
            <div onClick={()=>handleRaidInfo(raid)} className="border cursor-pointer lg:hover:-translate-y-2 transition ">
                <div>
                    <h2 className="font-semibold text-start p-2">{raid.name}</h2>
                </div>
                <img
                    src={raid.image}
                    alt={raid.name}
                    className="w-full aspect-video object-cover"
                />
                <div>
                    <div className="border-t p-2 flex flex-row justify-between">
                        <p className="m-0">Level: {raid.level}</p>
                        <p className="m-0">Size: {returnSize(raid.sizes)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Raid;