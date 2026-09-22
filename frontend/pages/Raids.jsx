import Raid from "../components/Raid";
import raidsData from "../mocks/raids.json";
import { useState, useEffect } from "react";

const expansions = [
    { key: "wrath_of_the_lich_king", name: "Wrath of The Lich King" },
    { key: "the_burning_crusade", name: "The Burning Crusade" }
];
function Raids() {
    const [raids, setRaids] = useState([])
    const [expansion, setExpansion] = useState("0")
    
    const filteredRaids = expansion === "0"
        ? raids
        : raids.filter(raid => raid.expansion === expansion);
    
    useEffect(() => {
        setRaids(raidsData);
    }, [])

    return (
    <>
        <div className="flex flex-row p-2 my-3 border-b">
            <select onChange={(e) => setExpansion(e.target.value)} name="expansion" id="expansion" className="border w-full md:w-2/4 lg:w-1/4 p-2 md:p-1">
                <option className="p-1" value="0">All</option>
                {expansions.map(exp => (
                    <option className="p-1" key={exp.key} value={exp.key}>
                        {exp.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3 p-2">
            {filteredRaids.map(raid => (
                <Raid key={raid.id} raid={raid} />
            ))}
        </div>
    </>
    )
}

export default Raids;