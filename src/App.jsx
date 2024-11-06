import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Review from "./pages/Review";
import AboutUs from "./pages/AboutUs";
import Instructions from "./pages/Instructions";
import Policy from "./pages/Policy";
import PricingPage from "./pages/PricingPage";
import FAQs from "./pages/FAQs";
import CoinPurchased from "./components/common/smallScreens/CoinPurchased";
import BuyCoin from "./pages/BuyCoin";
import Profile from "./pages/Profile";
import LeaderBoard from "./pages/LeaderBoard";
import SubscribeNow from "./components/common/smallScreens/SubscribeNow";
import BoughtCoin from "./components/common/smallScreens/BoughtCoin";
import Award from "./pages/Award";
import PaymentMode from "./components/payment/PaymentMode";
import SubjectSelection from "./pages/SubjectSelection";
import PracticeSubjects from "./pages/PracticeSubjects";
import SelectYear from "./pages/SelectYear";
import TestPage from "./pages/TestPage";
import Practice from "./pages/Practice";
import DailyTest from "./pages/DailyTest";
import ForgotPassword from "./pages/ForgotPassword";
import SetPassword from "./pages/SetPassword";
import { SetAuthToken, SetDefaultHeaders, TOKEN } from "./data/Config";
import useGenFetcher from "./data/useFetcher";
import useErrorStore from "./data/stores/errorStore";
import { ToastContainer, Zoom } from "react-toastify";
import { ModalContainer } from "./components/auth/Button";
import Conditions from "./pages/Conditions";
import ReviewAnswers from "./pages/ReviewAnswers";

SetDefaultHeaders();

if (localStorage.getItem(TOKEN)) {
  SetAuthToken(localStorage.getItem(TOKEN));
}

const routesConfig = [
  { path: "/", element: LandingPage, meta: { title: "", description: "" } },
  {
    path: "/sign-up",
    element: SignupPage,
    meta: { title: "", description: "" },
  },
  { path: "/login", element: Login, meta: { title: "", description: "" } },
  {
    path: "/contact-us",
    element: ContactUs,
    meta: { title: "", description: "" },
  },
  { path: "/review", element: Review, meta: { title: "", description: "" } },
  { path: "/about-us", element: AboutUs, meta: { title: "", description: "" } },
  {
    path: "/instructions",
    element: Instructions,
    meta: { title: "", description: "" },
  },
  {
    path: "/terms-and-conditions",
    element: Conditions,
    meta: { title: "", description: "" },
  },

  { path: "/policy", element: Policy, meta: { title: "", description: "" } },
  {
    path: "/pricing",
    element: PricingPage,
    meta: { title: "", description: "" },
  },
  { path: "/faqs", element: FAQs, meta: { title: "", description: "" } },
  {
    path: "/out-of-coin",
    element: CoinPurchased,
    meta: { title: "", description: "" },
  },
  {
    path: "/subscribe-now",
    element: SubscribeNow,
    meta: { title: "", description: "" },
  },
  {
    path: "/buy-coins",
    element: BuyCoin,
    meta: { title: "", description: "" },
  },
  {
    path: "/leader-board",
    element: LeaderBoard,
    meta: { title: "", description: "" },
  },
  { path: "/profile", element: Profile, meta: { title: "", description: "" } },
  {
    path: "/bought-coin",
    element: BoughtCoin,
    meta: { title: "", description: "" },
  },
  { path: "/award", element: Award, meta: { title: "", description: "" } },

  { path: "/review-answers", element: ReviewAnswers, meta: { title: "", description: "" } },
  {
    path: "/payment-mode",
    element: PaymentMode,
    meta: { title: "", description: "" },
  },
  {
    path: "/select-exam",
    element: Practice,
    meta: { title: "", description: "" },
  },
  {
    path: "/subjects",
    element: SubjectSelection,
    meta: { title: "", description: "" },
  },
  {
    path: "/select-year",
    element: SelectYear,
    meta: { title: "", description: "" },
  },
  { path: "/test", element: TestPage, meta: { title: "", description: "" } },
  {
    path: "/daily-test",
    element: DailyTest,
    meta: { title: "", description: "" },
  },
  {
    path: "/practice-subject",
    element: PracticeSubjects,
    meta: { title: "", description: "" },
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
    meta: { title: "", description: "" },
  },
  {
    path: "/set-password",
    element: SetPassword,
    meta: { title: "", description: "" },
  },
];

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    const currentRoute = routesConfig.find((route) => route.path === pathname);

    if (currentRoute?.meta.title) {
      document.title = currentRoute.meta.title;
    }

    if (currentRoute?.meta.description) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = currentRoute.meta.description;
      }
    }
  }, [pathname]);

  let { loadUser } = useGenFetcher(),
    { clearErrors, error } = useErrorStore();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer position="top-right" theme="colored" transition={Zoom} />
      <Routes>
        {routesConfig.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
      {error?.length > 0 && (
        <ModalContainer handleClose={() => clearErrors()}>
          <div>
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold text-black">Error</h3>
              </div>
            </div>

            <div className="">
              {error?.map((item, i) => (
                <p key={i} className="fw-bold inter w-100">
                  <span className="fontInherit me-2">
                    {error?.length !== 1 && <>{i + 1}.</>}
                  </span>{" "}
                  {item?.message || item || null}{" "}
                  {item?.path?.includes("[") ? (
                    <>
                      (
                      {Number(
                        item?.path
                          ?.substring(item?.path.indexOf("[") + 1)
                          ?.split("]")?.[0],
                      ) + 1}
                      )
                    </>
                  ) : null}
                </p>
              ))}
            </div>

            <button
              onClick={() => clearErrors()}
              className="mt-8 h-12 w-full rounded-lg bg-[#3787FF] text-base font-medium text-[#F2FBFF]"
            >
              Close
            </button>
          </div>
        </ModalContainer>
      )}
    </>
  );
}

export default App;