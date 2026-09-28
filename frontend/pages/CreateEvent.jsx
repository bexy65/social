import { CreateRaidEventForm } from "../components/CreateRaidEventForm";
import { useParams } from "react-router-dom";

function CreateEvent() {
    const { id } = useParams();
    return (
        <div className="">
            <CreateRaidEventForm id={id}/>
        </div>
    )
}

export default CreateEvent;