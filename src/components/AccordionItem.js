import React, { useState } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ title, content, subitems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button onClick={toggle} className="accordion-button">
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
          {subitems && (
            <div className="accordion-subitems">
              {subitems.map((subitem, index) => (
                <AccordionSubItem key={index} title={subitem.title} content={subitem.content} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AccordionSubItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-subitem">
      <button onClick={toggle} className="accordion-subitem-button">
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="accordion-subitem-content"><p>{content}</p></div>}
    </div>
  );
};

export default AccordionItem;
