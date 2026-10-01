import { useParams } from "react-router-dom";
import events from "../mocks/events.json";
import { useState } from "react";
import  BackButton  from "../components/BackButton"

function EventPage() {
    const { id } = useParams();
    const [joining, setJoining] = useState(false);
    const [messaging, setMessaging] = useState(false);

    const event = events.find(e => e.id === Number(id));

    const handleJoinRequest = () => {
        setJoining(true);

        console.log("Sending join request!");

    }

    const handleDMLeader = () => {
        setMessaging(true);
        console.log("Sending dm request!");
        console.log("Should open new page with the chat or open chat ?!");

    }

    if (!event) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">
                    Event not found
                </h1>

                <BackButton className="button border p-2" />

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

                <BackButton className="button border p-2" />

            </div>


            <div className="border p-4 mb-6 text-start">

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


            <div className="border p-4">

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

                <button
                    onClick={handleJoinRequest}
                    disabled={joining}
                    className="button border p-2"
                >
                    {joining ? "Loading..." : "Join"}
                </button>

                <button
                    onClick={handleDMLeader}
                    disabled={messaging}
                    className="button border p-2"
                >
                    {messaging ? "Loading..." : "DM Leader"}
                </button>

            </div>

        </div>
    );
}

export default EventPage;
