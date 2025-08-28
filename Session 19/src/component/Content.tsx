import React from 'react';
import { useTheme } from '../ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <main>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
    </main>
  );
};

export default Content;
