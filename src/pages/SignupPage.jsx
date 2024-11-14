import { useEffect } from "react";
import SignUpForm from "../components/auth/SignUpForm";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../data/stores/authStore";

function SignupPage() {
  let navigate = useNavigate(),
    { isAuth } = useAuthStore();

  useEffect(() => {
    if (isAuth) navigate("/profile");
  }, [isAuth, navigate]);

  return (
    <main className="fixed inset-0 h-full w-full overflow-y-auto bg-white">
      <SignUpForm />
    </main>
  );
}

export default SignupPage;
