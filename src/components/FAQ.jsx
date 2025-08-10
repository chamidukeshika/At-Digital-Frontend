import React, { useState } from 'react';
import '../styles/faq.css';

const FAQComponent = () => {
    const [openItems, setOpenItems] = useState({ 0: true });

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        { question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", answer: "Lorem ipsum dolor sit amet consectetur..." },
        { question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?", answer: "Lorem ipsum dolor sit amet consectetur..." },
        { question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?", answer: "Lorem ipsum dolor sit amet consectetur..." }
    ];

    return (
        <div className="container-fluid px-0">
            <div className="row justify-content-center mx-0">
                <div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-7">
                    <div className="faq-container">
                        <h2 className="faq-title text-center mb-4">Frequently asked questions</h2>
                        <div className="faq-list">
                            {faqData.map((item, index) => (
                                <div key={index} className="faq-item mb-3">
                                    <div
                                        className={`faq-question d-flex justify-content-between align-items-start p-3 ${openItems[index] ? 'faq-question-open' : ''}`}
                                        onClick={() => toggleItem(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span className="faq-question-text flex-grow-1 me-3">
                                            {item.question}
                                        </span>
                                        <span className="faq-icon">
                                            {openItems[index] ? '−' : '+'}
                                        </span>
                                    </div>
                                    {openItems[index] && (
                                        <div className="faq-answer p-3 pt-0">
                                            <p className="faq-answer-text mb-0">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
