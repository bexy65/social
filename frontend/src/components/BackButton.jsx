import { useNavigate } from "react-router-dom";

export default function BackButton({className=""}) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return(
        <button className={className} onClick={goBack}>
            ← Back
        </button>
    );
}