import React, { useState } from 'react';
import './ToggleComponent.css';

const ToggleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggle} className="toggle-button">
        Pse të parkoni një emër domaini në Parkname?
      </button>
      {isOpen && (
        <div className="toggle-content">
          <p>
            Parkname është standardi kryesor i industrisë për parkimin e domain-it dhe shërbimet e monetizimit. Ne ofrojmë një gamë të gjerë shërbimesh për t'ju ndihmuar të arrini sukses.
          </p>
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
