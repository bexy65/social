import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    let isAuthenticated = true;
    isAuthenticated = false;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;