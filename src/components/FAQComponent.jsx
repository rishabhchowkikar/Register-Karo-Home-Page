import React from "react";
import { IoMdArrowForward } from "react-icons/io";
const FAQComponent = () => {
  const faqData = [
    {
      id: 1,
      question: "What services do you offer for data recovery?",
      answer:
        "We offer comprehensive data recovery services including recovery from formatted drives, damaged storage devices, corrupted files, and accidental deletions. Our advanced software tools can recover files from various storage media including HDDs, SSDs, USB drives, and memory cards.",
    },
    {
      id: 2,
      question: "How secure is your cloud backup solution?",
      answer:
        "Our cloud backup solution uses industry-standard AES-256 encryption and maintains multiple redundant copies of your data across different geographic locations. We comply with GDPR, HIPAA, and other major data protection regulations to ensure your data remains secure and private.",
    },
    {
      id: 3,
      question: "What makes your software different from competitors?",
      answer:
        "Our software stands out through its intuitive interface, faster processing speeds, and higher recovery success rates. We use proprietary algorithms that can recover data from even severely corrupted storage devices while maintaining file integrity.",
    },
    {
      id: 4,
      question: "Do you offer support for enterprise customers?",
      answer:
        "Yes, we provide dedicated enterprise support with 24/7 availability, custom deployment options, volume licensing, and priority incident response. Our enterprise solutions can be tailored to meet specific organizational requirements and compliance needs.",
    },
    {
      id: 5,
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing tiers including monthly subscriptions and one-time purchases. Our plans are designed to accommodate both individual users and large organizations, with special pricing available for educational institutions and non-profits.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-orange-500 mb-2">FAQ</h2>
          <h3 className="text-4xl font-semibold text-gray-800">
            Frequent Ask Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="collapse collapse-arrow bg-white shadow-sm rounded-lg"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium flex items-center gap-3 pr-12">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-600 pt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="flex items-center justify-center p-5 rounded-md text-white font-medium bg-blue-900 gap-2">
            Show more
            <IoMdArrowForward className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
