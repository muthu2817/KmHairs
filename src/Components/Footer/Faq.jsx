import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import './FAQ.scss';

const FAQ = () => {
    const faqData = [
        { question: "What types of human hair products do you offer?", answer: "We specialize in premium, unprocessed human hair, available in bulk or as bundles. Our offerings include a range of hair types, such as virgin hair, Remy hair, and single- and double-drawn hair in various textures (straight, wavy, curly) and lengths." },

        { question: "How can I place a bulk order?", answer: "To place a bulk order, contact our sales team via email or phone. We will guide you through the selection process, pricing, and any customizations available. Once you confirm your order, we will provide an invoice and payment instructions." },

        { question: "Do you offer custom textures, colors, or packaging?", answer: "Absolutely! We offer custom textures, colors, and packaging options to meet your specific requirements. Custom orders may have a longer lead time, so reach out to our team for details on customization and timelines." },

        { question: " How is the hair sourced?", answer: "We ethically source our human hair directly from donors, ensuring it is unprocessed and free from synthetic or animal hair. Our sourcing process follows fair trade principles and maintains the highest quality standards." },
        {
            question:" What is your processing and delivery time?", answer:"Our standard processing time is typically 7-15 business days for bulk orders, though it may vary based on order size and customization. Delivery times depend on your location and shipping method; our team will provide an estimated delivery date when you place your order."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-wrapper">
            <h2>FAQ </h2>
            <div>
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div
                            onClick={() => toggleFAQ(index)}
                            className="faq-question"
                            style={{ cursor: 'pointer', fontWeight: 'bold' }}
                        >
                            {faq.question}
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                        <div>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
