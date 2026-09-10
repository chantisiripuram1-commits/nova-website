import { useState } from "react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is an AI-powered productivity platform that helps teams manage projects, automate tasks and collaborate."
    },
    {
      question: "Can I use NOVA for free?",
      answer:
        "Yes. NOVA offers a starter plan for individuals and small projects."
    },
    {
      question: "Does NOVA work for remote teams?",
      answer:
        "Yes. NOVA is designed to help remote teams collaborate and manage projects efficiently."
    },
    {
      question: "Can I cancel my plan?",
      answer:
        "Yes. You can cancel your subscription whenever you want."
    },
    {
      question: "Is my data secure?",
      answer:
        "NOVA is designed with security in mind to help keep your workspace and information protected."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq" id="faq">

      <div className="section-heading">

        <span>FAQ</span>

        <h2>
          Frequently asked questions
        </h2>

      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div className="faq-item" key={faq.question}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;