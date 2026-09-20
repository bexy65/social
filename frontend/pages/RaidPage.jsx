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
            <button onClick={() => navigate(-1)}>← Back</button>
        </div>
        );
    }

    return (
        <div className="raid-info">
            <button onClick={() => navigate(-1)}>
                ← Back
            </button>

            <img src={raid.image} alt={raid.name} />

            <h1>{raid.name}</h1>

            <p>
                <strong>Game:</strong> {raid.game}
            </p>

            <p>
                <strong>Expansion:</strong> {raid.expansion}
            </p>

            <p>
                <strong>Short Name:</strong> {raid.shortName}
            </p>

            <p>
                <strong>Level:</strong> {raid.level}
            </p>

            <p>
                <strong>Types:</strong> {raid.types.join(", ")}
            </p>

            <p>
                <strong>Sizes:</strong> {raid.sizes.join(", ")}
            </p>

            <p>
                <strong>Difficulties:</strong> {raid.difficulties.join(", ")}
            </p>

            <p>
                <strong>Bosses:</strong> {raid.bossCount}
            </p>
        </div>
    );
}

export default RaidInfo;