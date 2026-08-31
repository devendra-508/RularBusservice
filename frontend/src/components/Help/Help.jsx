import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaFacebookMessenger, FaHeadset } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const faqs = [
  {
    question: "How do I book a bus ticket?",
    answer:
      "Go to the search section on the home page, enter your From and Destination villages/towns, pick a travel date and number of passengers, then click 'Search Available Buses'. Choose a bus and click 'Book Now' to complete your booking.",
  },
  {
    question: "Do I need to create an account to book a ticket?",
    answer:
      "Yes, you'll need to sign up or log in before confirming a booking. This lets us keep a record of your tickets and helps you track or manage them later.",
  },
  {
    question: "How can I check my booking status?",
    answer:
      "Go to the 'Booking Status' section and enter the PNR number you received after booking. Your ticket details, including route, date, and fare, will be shown instantly.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, cancellations can be managed from your account. Please contact support if you need help cancelling a confirmed booking.",
  },
  {
    question: "What if my village or route is not listed?",
    answer:
      "We're steadily expanding our network. If you don't see your route, please reach out to us using the contact details below and we'll try to help.",
  },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="help"
      className="flex w-full scroll-mt-[80px] justify-center bg-gradient-to-br from-emerald-50 via-white to-green-50 px-4 py-14 sm:px-6"
    >
      <div className="w-full max-w-4xl">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-black text-gray-600 sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-600">
            Have a question? Find quick answers below, or reach out to us
            directly.
          </p>
        </div>

        {/* ================= FAQ + CONTACT ================= */}
        <div className="mt-10 flex flex-col gap-10">

          {/* ================= FAQ ACCORDION ================= */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-gray-700">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-green-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div>
                    <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ================= CONTACT CARDS ================= */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            {/* CALL */}
            <a
              href="tel:+919876543210"
              className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-5 text-center transition hover:-translate-y-1 hover:border-green-200 hover:bg-green-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                <FaHeadset size={20} />
              </div>

              <p className="mt-2 text-sm font-bold text-gray-900">
                Call Us
              </p>

              <p className="text-xs text-gray-500">
                +91 98765 43210
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:support@ruralbus.com"
              className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-5 text-center transition hover:-translate-y-1 hover:border-green-200 hover:bg-green-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                <SiGmail size={20} />
              </div>

              <p className="mt-2 text-sm font-bold text-gray-900">
                Email Us
              </p>

              <p className="text-xs text-gray-500">
                support@ruralbus.com
              </p>
            </a>

            {/* MESSAGE */}
            <a
              href="https://m.me/yourpageusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-5 text-center transition hover:-translate-y-1 hover:border-green-200 hover:bg-green-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <FaFacebookMessenger size={20} />
              </div>

              <p className="mt-2 text-sm font-bold text-gray-900">
                Message Us
              </p>

              <p className="text-xs text-gray-500">
                Chat on Messenger
              </p>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}