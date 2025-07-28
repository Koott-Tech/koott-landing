"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do I book a therapy session?",
    answer: "Booking a session is simple! Click the 'Book Now' button, fill out our easy form with your preferences, and we'll match you with the perfect Malayali psychologist for your needs."
  },
  {
    id: 2,
    question: "Are all therapists Malayali?",
    answer: "Yes, all our therapists are Malayali professionals who understand your cultural background, language, and values. This ensures a more comfortable and effective therapy experience."
  },
  {
    id: 3,
    question: "What languages do you offer therapy in?",
    answer: "We offer therapy in Malayalam, English, and Hindi. You can choose your preferred language during the booking process to ensure the best communication."
  },
  {
    id: 4,
    question: "How much does a therapy session cost?",
    answer: "Our therapy sessions are competitively priced and vary based on the therapist's experience and session duration. We offer transparent pricing with no hidden fees."
  },
  {
    id: 5,
    question: "Is online therapy as effective as in-person?",
    answer: "Yes! Online therapy has been proven to be just as effective as in-person sessions. It offers convenience, privacy, and the same professional care from the comfort of your home."
  },
  {
    id: 6,
    question: "What if I'm not satisfied with my therapist?",
    answer: "We want you to have the best experience possible. If you're not satisfied, we offer free therapist switching and will help you find someone who better matches your needs."
  },
  {
    id: 7,
    question: "Do you offer emergency mental health support?",
    answer: "For immediate crisis support, please contact emergency services. While we provide professional therapy, we're not a crisis hotline. We focus on ongoing mental wellness support."
  },
  {
    id: 8,
    question: "How do I know if therapy is right for me?",
    answer: "Therapy can benefit anyone dealing with stress, anxiety, relationship issues, or life transitions. Our free consultation can help you determine if therapy is the right choice for you."
  }
];

function FAQItem({ faq, isOpen, toggleOpen }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full py-6 px-4 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <p className="text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center py-20">
      <div className="w-full max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our mental wellness platform and therapy services.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openFAQ === faq.id}
              toggleOpen={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
} 