import '../styles.css'
import React from 'react';

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick();

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 300); 

  };

  return (
    <button type="button" className="Button" onClick={handleClick}>
      Load more
    </button>
  );
};

export default Button;
