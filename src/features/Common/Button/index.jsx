import React from 'react';

const Button = (props) => {
  const { className, text, onClick, disabled = false } = props;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
