import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("email"); // "email" or "reset"
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    token: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateEmailForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateResetForm = () => {
    const newErrors = {};

    if (!formData.token) {
      newErrors.token = "Token is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmailForm()) return;

    setLoading(true);
    try {
      // Replace with your actual API call
      const response = await fetch("/api/v1/user/set-password-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send reset email");
      }

      toast.success("Reset token has been sent to your email");
      setStep("reset");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (!validateResetForm()) return;

    setLoading(true);
    try {
      // Replace with your actual API call
      const response = await fetch("/api/v1/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          token: formData.token,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      toast.success("Password successfully reset");
      navigate("/reset-password");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-[30rem] flex-col self-center rounded-[50px] bg-zinc-50 bg-opacity-80 px-6 py-8 shadow-[-2px_4px_6px_rgba(0,0,0,0.25)] sm:w-[90%] sm:px-8 md:mt-20 md:w-[80%] lg:mt-32 lg:w-[30rem]">
      <h1 className="text-center text-3xl font-semibold text-teal-800 md:text-4xl">
        {step === "email" ? "Set Password" : "Enter New Password"}
      </h1>

      {step === "email" ? (
        <form onSubmit={handleEmailSubmit} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex min-h-[60px] w-full items-center rounded-xl bg-zinc-50 px-2.5 py-2.5 shadow-sm">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full bg-transparent p-2.5 text-base text-black text-opacity-50 outline-none md:text-lg"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex min-h-[60px] w-full items-center justify-center gap-2.5 rounded-xl bg-teal-700 px-4 py-4 text-lg font-semibold text-zinc-50 shadow-sm transition-colors hover:bg-teal-600 disabled:opacity-50 md:mt-6 md:min-h-[74px] md:text-xl"
          >
            {loading ? "Sending..." : "Send set Token"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetSubmit} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex min-h-[60px] w-full items-center rounded-xl bg-zinc-50 px-2.5 py-2.5 shadow-sm">
              <input
                type="text"
                name="token"
                value={formData.token}
                onChange={handleInputChange}
                placeholder="Enter reset token"
                className="w-full bg-transparent p-2.5 text-base text-black text-opacity-50 outline-none md:text-lg"
              />
            </div>
            {errors.token && (
              <p className="text-sm text-red-500">{errors.token}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex min-h-[60px] w-full items-center rounded-xl bg-zinc-50 px-2.5 py-2.5 shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="New password"
                className="w-full bg-transparent p-2.5 text-base text-black text-opacity-50 outline-none md:text-lg"
              />
            </div>
            {errors.newPassword && (
              <p className="text-sm text-red-500">{errors.newPassword}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex min-h-[60px] w-full items-center rounded-xl bg-zinc-50 px-2.5 py-2.5 shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm new password"
                className="w-full bg-transparent p-2.5 text-base text-black text-opacity-50 outline-none md:text-lg"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="self-end text-sm text-gray-600 hover:text-gray-800"
          >
            {showPassword ? "Hide" : "Show"} password
          </button>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex min-h-[60px] w-full items-center justify-center gap-2.5 rounded-xl bg-teal-700 px-4 py-4 text-lg font-semibold text-zinc-50 shadow-sm transition-colors hover:bg-teal-600 disabled:opacity-50 md:mt-6 md:min-h-[74px] md:text-xl"
          >
            {loading ? "Resetting..." : "Set Password"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Create;