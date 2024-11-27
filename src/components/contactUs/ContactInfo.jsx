import Socials from "./Socials";

function ContactInfo() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@examprimed.com";
  };

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2347043303000", "_blank");
  };

  const handleFacebookClick = () => {
    window.open(
      "https://web.facebook.com/profile.php?id=61569332769702",
      "_blank",
    );
  };

  return (
    <section className="flex w-[30%] flex-col items-center max-md:mx-auto max-md:mt-6 max-md:w-[80%]">
      <div className="mt-2 flex w-full flex-col items-start text-base font-medium text-black">
        <h1 className="text-2xl font-semibold">HOW CAN WE HELP YOU?</h1>
        <p className="mt-2.5 self-stretch text-xl">
          You can fill this form or drop an email to
        </p>
        <button
          onClick={handleEmailClick}
          className="mt-4 flex w-full items-center justify-center gap-5 rounded-full bg-teal-700 px-8 py-3 text-sm text-white"
        >
          <img
            loading="lazy"
            src="/vectors/fluent_mail-24-filled.png"
            alt="Email icon"
            className="h-8 w-8"
          />
          <span>info@examprimed.com</span>
        </button>

        <div
          onClick={() => handlePhoneClick("+2347043303000")}
          className="mt-6 flex w-full cursor-pointer items-center justify-center gap-5 rounded-full border-2 border-teal-700 px-8 py-3"
        >
          <img
            loading="lazy"
            src="/vectors/ion_call.png"
            alt="Phone icon"
            className="h-6 w-6"
          />
          <div>+234 7043303000</div>
        </div>

        <div
          onClick={handleWhatsAppClick}
          className="mt-5 flex w-full cursor-pointer items-center justify-center gap-5 rounded-full border-2 border-teal-700 px-8 py-3"
        >
          <img
            loading="lazy"
            src="/vectors/whatssap.png"
            alt="WhatsApp icon"
            className="h-6 w-6"
          />
          <span>07043303000</span>
        </div>

        <div
          onClick={handleFacebookClick}
          className="mt-5 flex w-full cursor-pointer items-center justify-center gap-5 rounded-full border-2 border-teal-700 px-8 py-3"
        >
          <img
            loading="lazy"
            src="/vectors/facebook.png"
            alt="Facebook icon"
            className="h-6 w-6"
          />
          <span>ExamPrime</span>
        </div>

        <Socials />
      </div>
    </section>
  );
}

export default ContactInfo;
