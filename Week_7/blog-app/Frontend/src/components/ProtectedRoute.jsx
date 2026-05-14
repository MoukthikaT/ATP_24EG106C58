import { useAuth } from "../store/authStore";
import { Navigate } from "react-router";
import { toast } from "react-hot-toast";
import { loadingClass } from "../styles/common";

function ProtectedRoute({ children, allowedRoles }) {
  const { loading, currentUser, isAuthenticated } = useAuth();

  // Loading state
  if (loading) {
    return <p className={loadingClass}>Loading...</p>;
  }

  // If user not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Role check
  if (allowedRoles && !allowedRoles.includes(currentUser?.role)) {
    toast.error("Unauthorized access");
    return <Navigate to="/unauthorized" replace state={{ redirectTo: "/" }} />;
  }

  return children;
}

export default ProtectedRoute;
