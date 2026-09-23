import { CreateRaidEventForm } from "../components/CreateRaidEventForm";
import { useParams } from "react-router-dom";

function CreateEvent() {
    const { id } = useParams();
    return (
        <div className="max-w-xl mx-auto p-6 my-3">
            <CreateRaidEventForm id={id}/>
        </div>
    )
}

export default CreateEvent;