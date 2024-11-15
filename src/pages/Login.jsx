import { useNavigate } from "react-router-dom";
import SignInForm from "../components/auth/SignInForm";
import Header from "../components/common/Header";
import useAuthStore from "../data/stores/authStore";
import { useEffect } from "react";

function Login() {
  let navigate = useNavigate(),
    { isAuth } = useAuthStore();

  useEffect(() => {
    if (isAuth) navigate("/profile");
  }, [isAuth, navigate]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <img
        loading="lazy"
        src="/images/SignupScreen.png"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative flex min-h-screen w-full flex-col">
        <Header />
        <div className="flex flex-grow items-center justify-center px-4 pb-12 sm:px-6 md:px-8 md:pb-0">
          <SignInForm />
        </div>
      </div>
    </main>
  );
}

export default Login;
