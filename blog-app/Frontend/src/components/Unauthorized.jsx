import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const Unauthorized = ({ delay = 5000 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.redirectTo || "/login";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo, { replace: true });
    }, delay);
    return () => clearTimeout(timer);
  }, [navigate, redirectTo, delay]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">403 - Unauthorized</h1>
      <p className="text-lg text-blue-800 mb-2">
        You don’t have permission to access this page.
      </p>
      <p className="text-sm text-blue-600">Redirecting...</p>
      <button
        onClick={() => navigate(redirectTo, { replace: true })}
        className="mt-6 px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
      >
        Go Back Now
      </button>
    </div>
  );
};

export default Unauthorized;
