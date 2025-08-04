
import { useState } from "react";
import { useURL } from "../../data/Config";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    telephone: "",
    message: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.telephone) newErrors.telephone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.acceptTerms)
      newErrors.acceptTerms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${useURL}/api/v1/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          acceptTerms: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log({ error });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section className="mt-10 flex w-[80%] max-w-lg flex-col items-center max-md:mx-auto max-md:w-full">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col text-sm text-black"
      >
        {submitStatus === "success" && (
          <div className="mb-4 text-green-600">Message sent successfully!</div>
        )}
        {submitStatus === "error" && (
          <div className="mb-4 text-red-600">
            Failed to send message. Please try again.
          </div>
        )}

        <div className="flex w-full items-center gap-2 rounded-xl bg-zinc-50 px-4 py-3 shadow-sm">
          <input
            id="name"
            name="fullname"
            type="text"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-transparent"
          />
        </div>
        {errors.fullname && (
          <div className="mt-1 text-xs text-red-500">{errors.fullname}</div>
        )}

        <div className="mt-5 flex w-full items-center gap-2 rounded-xl bg-zinc-50 px-3 py-3 shadow-sm">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-transparent"
          />
        </div>
        {errors.email && (
          <div className="mt-1 text-xs text-red-500">{errors.email}</div>
        )}

        <div className="mt-5 flex w-full items-center gap-2 rounded-xl bg-zinc-50 px-3 py-3 shadow-sm">
          <input
            id="phone"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-transparent"
          />
        </div>
        {errors.telephone && (
          <div className="mt-1 text-xs text-red-500">{errors.telephone}</div>
        )}

        <div className="mt-5 flex w-full items-start gap-2 rounded-xl bg-zinc-50 px-3 py-5 shadow-sm">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your text here"
            className="h-full w-full bg-transparent"
            rows="4"
          />
        </div>
        {errors.message && (
          <div className="mt-1 text-xs text-red-500">{errors.message}</div>
        )}

        <label className="mt-5">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
          />{" "}
          I accept terms & conditions.
        </label>
        {errors.acceptTerms && (
          <div className="mt-1 text-xs text-red-500">{errors.acceptTerms}</div>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-teal-700 px-8 py-3 text-lg text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
