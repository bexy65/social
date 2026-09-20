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
            <div onClick={()=>handleRaidInfo(raid)} className="py-2">
                <img
                    src={raid.image}
                    alt={raid.name}
                    className="w-full aspect-video object-cover"
                />
                <div className="py-2">
                    <h4 className="font-semibold">{raid.name}</h4>
                    <div className="border p-2 flex flex-row justify-between">
                        <p className="m-0">Level: {raid.level}</p>
                        <p className="m-0">Size: {returnSize(raid.sizes)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Raid;