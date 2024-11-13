import Header from "../components/common/Header";
import Create from "../components/auth/Create";

function SetPassword() {
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
          <Create />
        </div>
      </div>
    </main>
  );
}

export default SetPassword;
