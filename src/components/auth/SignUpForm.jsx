import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import CheckboxField from "./CheckboxField";
import Button from "./Button";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import useAuthStore from "../../data/stores/authStore";
import useGenFetcher, { apiCall } from "../../data/useFetcher";
import useErrorStore from "../../data/stores/errorStore";
import { toast } from "react-toastify";

const inputFields = [
  { label: "First Name", type: "text", name: "firstName" },
  { label: "Last Name", type: "text", name: "lastName" },
  { label: "Email Address", type: "email", name: "email" },
  { label: "Phone Number", type: "tel", name: "telephone", maxLength: 11 },
];

function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.telephone.trim())
      newErrors.telephone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { login } = useAuthStore(),
    { loadUser } = useGenFetcher();

  const [loading, setLoading] = useState(null),
    { returnErrors } = useErrorStore();
  let handleSubmit = async (e) => {
    e?.preventDefault();
    if (validateForm()) {
      setLoading(true);
      let newState = { ...formData };

      let { response, errArr, errMsg } = await apiCall({
        type: "post",
        url: `/api/v1/user`,
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
        navigate("/practice-subject");
        return;
      }
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col">
      <img
        loading="lazy"
        src="/images/SignupScreen.png"
        alt=""
        className="fixed inset-0 h-full w-full object-cover"
      />

      <Header />

      <div className="relative flex min-h-[calc(100vh-64px)] w-full justify-center px-4 py-8 md:justify-end md:px-8 lg:px-16">
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-[440px] flex-col rounded-[40px] bg-zinc-50 bg-opacity-80 p-6 md:mr-8 md:mt-20 md:max-w-[500px] md:p-8 lg:mr-20"
        >
          <h1 className="mb-6 text-center text-2xl font-semibold text-[#007273] md:text-3xl">
            Sign up
          </h1>

          <div className="flex w-full flex-col gap-4">
            {inputFields.map((field, index) => (
              <InputField
                key={index}
                label={field.label}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                error={errors[field.name]}
                maxLength={field?.maxLength}
              />
            ))}

            <PasswordField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
            />

            <PasswordField
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={errors.confirmPassword}
            />
          </div>

          <div className="mt-6">
            <CheckboxField
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              error={errors.agreeTerms}
            />
          </div>

          <div className="mt-6">
            <Button
              loading={loading}
              onClick={handleSubmit}
              label="Sign-Up"
              type="submit"
            />
          </div>

          <div className="mt-4 flex flex-col items-center justify-center gap-2 text-cyan-950 sm:flex-row">
            <p className="text-base font-semibold">Already have an account?</p>
            <Link
              to="/login"
              className="text-lg font-semibold transition-colors hover:text-cyan-800 md:text-xl"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SignUpForm;
