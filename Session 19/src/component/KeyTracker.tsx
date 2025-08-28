import React, { useEffect, useState } from 'react';
import '../stype/Bai06.css';

const KeyTracker: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeyPressed(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="key-tracker">
      <h2>Phím bạn vừa nhấn:</h2>
      <div className="key-display">{keyPressed}</div>
    </div>
  );
};

export default KeyTracker;
