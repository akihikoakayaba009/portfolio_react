import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={accordionStyle}>
            <div onClick={toggleAccordion} style={accordionHeaderStyle}>
                <h3 style={{ margin: 0 }}>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div style={accordionContentStyle}>{children}</div>}
        </div>
    );
};

const accordionStyle = {
    backgroundColor: '#1a1a2e',
    color: '#f0f0f0',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #e94560',
    padding: '15px',
};

const accordionHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
};

const accordionContentStyle = {
    marginTop: '10px',
    paddingLeft: '15px',
};

export default Accordion;
