import React from 'react';
import './InputField.css';

function InputField({ label, type, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    </div>
  );
}

export default InputField;
