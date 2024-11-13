import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../data/stores/authStore";
import useGenFetcher, { apiCall } from "../../data/useFetcher";
import useErrorStore from "../../data/stores/errorStore";
import { toast } from "react-toastify";
import Button from "./Button";

function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    telephone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.telephone)) {
      newErrors.telephone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { login } = useAuthStore(),
    { loadUser } = useGenFetcher(),
    [loading, setLoading] = useState(null),
    { returnErrors } = useErrorStore();
  let handleSubmit = async (e) => {
    e?.preventDefault();
    if (validateForm()) {
      setLoading(true);
      let newState = { ...formData };

      let { response, errArr, errMsg } = await apiCall({
        type: "post",
        url: `/api/v1/user/login`,
        data: newState,
      });
      if (errArr) {
        setLoading(false);
        return returnErrors(errArr);
      }
      if (errMsg) {
        setLoading(false);
        return toast.error(errMsg);
      }
      setLoading(false);
      if (response) {
        login(response);
        loadUser();
        navigate("/profile");
        return;
      }
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-[30rem] flex-col self-center rounded-[50px] bg-zinc-50 bg-opacity-80 px-6 py-8 shadow-[-2px_4px_6px_rgba(0,0,0,0.25)] sm:w-[90%] sm:px-8 md:mt-20 md:w-[80%] lg:mt-32 lg:w-[30rem]">
      <h1 className="text-center text-3xl font-semibold text-teal-800 md:text-4xl">
        Sign In
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-auto flex w-full flex-col md:mt-10"
      >
        <div className="mb-4 flex w-full flex-col">
          <div className="flex min-h-[60px] w-full items-center rounded-xl bg-zinc-50 px-2.5 py-2.5 shadow-sm">
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full bg-transparent p-2.5 text-base text-black text-opacity-50 outline-none md:text-lg"
              aria-label="Phone Number"
              maxLength={11}
            />
          </div>
          {errors.telephone && (
            <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>
          )}
        </div>

        <div className="mb-4 flex w-full flex-col">
          <div className="flex min-h-[60px] w-full items-center rounded-xl bg-zinc-50 px-2.5 py-2.5 shadow-sm">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="flex-grow bg-transparent p-2.5 text-base text-black text-opacity-50 outline-none md:text-lg"
              aria-label="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <Link
          to="/set-password"
          className="mt-3 self-end p-2.5 text-lg font-medium text-cyan-950 md:mt-5 md:text-xl"
        >
          Forgot Password?
        </Link>

        {/* <button
          type="submit"
          className="mt-6 flex min-h-[60px] w-full items-center justify-center gap-2.5 rounded-xl bg-teal-700 px-4 py-4 text-lg font-semibold text-zinc-50 shadow-sm transition-colors hover:bg-teal-600 md:mt-8 md:min-h-[74px] md:text-xl"
        >
          Sign In
        </button> */}
        <Button
          type="submit"
          loading={loading}
          onClick={handleSubmit}
          label="Sign In"
        />
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 text-cyan-950 md:mt-8 md:gap-4">
        <p className="text-base font-medium md:text-xl">
          Don&apos;t have an account?
        </p>
        <Link
          to="/sign-up"
          className="text-base font-semibold transition-colors hover:text-teal-700 md:text-xl"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
}

export default SignInForm;
