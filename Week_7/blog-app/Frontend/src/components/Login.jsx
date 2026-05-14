import { useForm } from "react-hook-form";
import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
  loadingClass,
} from "../styles/common";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { login, currentUser, loading, error, isAuthenticated } = useAuth(
    (state) => state
  );

  const onUserLogin = async (userCredObj) => {
    try {
      await login(userCredObj);
    } catch (err) {
      toast.error("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (isAuthenticated === true) {
      if (currentUser.role === "USER") {
        toast.success("Login success! Redirecting to User Profile", {
          duration: 2000,
        });
        navigate("/user-profile");
      }
      if (currentUser.role === "AUTHOR") {
        toast.success("Login success! Redirecting to Author Profile", {
          duration: 2000,
        });
        navigate("/author-profile");
      }
      if (currentUser.role === "ADMIN") {
        toast.success("Login success! Redirecting to Admin Profile", {
          duration: 2000,
        });
        navigate("/admin-profile");
      }
    }
  }, [isAuthenticated, currentUser, navigate]);

  if (loading) {
    return <p className={loadingClass}>Loading....</p>;
  }

  return (
    <div className={`${pageBackground} flex items-center justify-center min-h-screen`}>
      <div className={`${formCard} border border-blue-200 shadow-md w-full max-w-md p-8`}>
        <h2 className={`${formTitle} text-blue-800 text-center mb-6`}>Sign In</h2>

        {error && <p className={errorClass}>{error}</p>}

        <form onSubmit={handleSubmit(onUserLogin)}>
          {/* Email */}
          <div className={formGroup}>
            <label className={`${labelClass} text-blue-700`}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className={inputClass}
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  value.trim().length > 0 || "Email cannot be empty",
              })}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className={formGroup}>
            <label className={`${labelClass} text-blue-700`}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className={inputClass}
              {...register("password", {
                required: "Password is required",
                validate: (value) =>
                  value.trim().length > 0 || "Password cannot be empty",
              })}
            />
            {errors.password && <p className={errorClass}>{errors.password.message}</p>}
          </div>

          {/* Forgot password */}
          <div className="text-right -mt-2 mb-4">
            <NavLink to="/forgot-password" className={`${linkClass} text-xs text-blue-700`}>
              Forgot password?
            </NavLink>
          </div>

          {/* Submit */}
          <button type="submit" className={`${submitBtn} bg-blue-700 text-white w-full`}>
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className={`${mutedText} text-center mt-5`}>
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-700 font-medium">
            Create one
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
