import React, { useState } from 'react';

const quotes = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
];

const RandomQuote: React.FC = () => {
  const [quote, setQuote] = useState(quotes[2]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="random-quote">
      <h2>Câu nói truyền cảm hứng hôm nay:</h2>
      <p>"{quote}"</p>
      <button onClick={getRandomQuote}>Lấy câu nói mới</button>
    </div>
  );
};

export default RandomQuote;
