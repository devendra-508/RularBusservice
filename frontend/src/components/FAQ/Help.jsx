import { useState } from "react";
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";

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
            className="flex w-full scroll-mt-[80px] justify-center border-t-2 border-gray-200 bg-white px-4 py-28  sm:px-6"
        >
            <div className="w-full max-w-4xl">

                <div className="text-center">
                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700 sm:text-sm">
                        💬 HELP & SUPPORT
                    </span>
                    <h2 className="mt-5 text-3xl font-black text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Have a question? Find quick answers below, or reach out to us directly.
                    </p>
                </div>

                {/* ================= FAQ ACCORDION ================= */}
                <div className="mt-10 flex flex-col gap-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-white transition"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFaq(index)}
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`shrink-0 text-green-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= CONTACT CARDS ================= */}
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <a
                        href="tel:+919876543210"
                        className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:border-green-200 hover:bg-green-50"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                            <Phone size={22} />
                        </div>
                        <p className="font-bold text-gray-900">Call Us</p>
                        <p className="text-sm text-gray-500">+91 98765 43210</p>
                    </a>

                    <a
                        href="mailto:support@ruralbus.com"
                        className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:border-green-200 hover:bg-green-50"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                            <Mail size={22} />
                        </div>
                        <p className="font-bold text-gray-900">Email Us</p>
                        <p className="text-sm text-gray-500">support@ruralbus.com</p>
                    </a>

                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:border-green-200 hover:bg-green-50">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                            <MessageCircle size={22} />
                        </div>
                        <p className="font-bold text-gray-900">Service Center</p>
                        <p className="text-sm text-gray-500">Rural Bus Service Center, Chouthan, Uttarakhand</p>
                    </div>
                </div>

            </div>
        </section>
    );
}