import React, { useState, useRef } from 'react';
import '../stype/Bai03.css';

const RenderCounter: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div className="render-counter">
      <h2>Component Render Counter</h2>
      <label>
        Input: 
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
};

export default RenderCounter;
