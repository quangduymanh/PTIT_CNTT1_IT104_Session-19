import React, { useRef } from 'react';
import '../stype/Bai07.css';

const ScrollToSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-container">
      <button onClick={handleScroll}>Đi tới phần nội dung</button>

      <div className="fake-content">
        {[...Array(20)].map((_, i) => (
          <p key={i}>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        ))}
      </div>

      <div ref={sectionRef} className="target-section">
        <h2>Cuộn tới nội dung</h2>
        <p>Đây là phần nội dung bạn muốn cuộn tới.</p>
      </div>
    </div>
  );
};

export default ScrollToSection;
