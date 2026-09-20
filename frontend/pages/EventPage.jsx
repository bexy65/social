import { useParams, useNavigate } from "react-router-dom";
import events from "../mocks/events.json";

function EventPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const event = events.find(e => e.id === Number(id));

    if (!event) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">
                    Event not found
                </h1>

                <button
                    className="button border p-2"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="flex items-center justify-between border-b pb-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        {event.raidName}
                    </h1>

                    <p className="text-gray-600">
                        Starts at: {event.startsAt}
                    </p>
                </div>

                <button
                    className="button border p-2"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>
            </div>


            <div className="border rounded-lg p-4 mb-6">

                <h2 className="text-xl font-semibold mb-4">
                    Event Information
                </h2>

                <p>
                    <strong>Raid:</strong> {event.raidName}
                </p>

                <p>
                    <strong>Starts:</strong> {event.startsAt}
                </p>

                <p>
                    <strong>Players:</strong>{" "}
                    {event.slots.filled} / {event.slots.total}
                </p>

            </div>


            <div className="border rounded-lg p-4">

                <h2 className="text-xl font-semibold mb-4">
                    Players
                </h2>

                {event.players.map(player => (
                    <div
                        key={player.id}
                        className="border-b last:border-b-0 py-2 flex justify-between"
                    >
                        <span>{player.name}</span>

                        <span className="capitalize">
                            {player.role}
                        </span>
                    </div>
                ))}

            </div>


            <div className="flex gap-2 mt-6">

                <button className="button border p-2">
                    Request
                </button>

                <button className="button border p-2">
                    DM Leader
                </button>

            </div>

        </div>
    );
}

export default EventPage;
