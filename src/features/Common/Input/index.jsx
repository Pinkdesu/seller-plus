import React from 'react';

const Input = (props) => {
  const {
    type = 'text',
    label,
    value,
    placeholder,
    onChange,
    className,
  } = props;

  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
