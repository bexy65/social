import { useParams, useNavigate } from "react-router-dom";
import raids from "../mocks/raids.json";

function RaidInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    // const raid = raids.find(r => r.id === Number(id));

    const raid = raids.find(r => r.id == id);

    if (!raid) {
        return (
        <div>
            <h1>Raid not found</h1>
            <button className="border w-1/4 py-2" onClick={()=> navigate(-1)} > ← Back</button>
        </div>
        );
    }

    return (
        <div className="p-6">
            <div className="my-2 flex flex-row justify-end gap-2">
                <button className="border w-full md:w-1/4 py-2" onClick={()=> navigate(-1)} > ← Back</button>
                <button className="border w-full md:w-1/4 py-2" onClick={()=> navigate(`/create/${raid.id}`)} >+ Create</button>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img
                    src={raid.image}
                    alt={raid.name}
                    className="w-full md:w-64 h-46 object-cover"
                />

                <div className="text-start">
                    <h1 className="text-2xl font-bold mb-2">
                        {raid.name}
                    </h1>

                    <p className="mt-2">
                        <strong>Short Name:</strong> {raid.shortName}
                    </p>

                    <p>
                        <strong>Level:</strong> {raid.level}
                    </p>
                </div>

            </div>

            <div className="border p-4 text-start">
                <h2 className="text-xl font-semibold mb-4">
                    Raid Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-row gap-4">
                        <strong>Type</strong>
                        <p>{raid.types.join(", ")}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                      <strong>Sizes</strong>
                        <p>{raid.sizes.join(", ")}</p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <strong>Difficulties</strong>
                        <p>{raid.difficulties.join(", ")}</p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <strong>Bosses</strong>
                        <p>{raid.bossCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RaidInfo;