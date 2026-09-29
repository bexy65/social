import { CreateRaidEventForm } from "../components/CreateRaidEventForm";
import { useParams } from "react-router-dom";

function CreateEvent() {
    const { id } = useParams();
    return (
        <div className="max-w-2xl mx-auto">
            <CreateRaidEventForm id={id}/>
        </div>
    )
}

export default CreateEvent;