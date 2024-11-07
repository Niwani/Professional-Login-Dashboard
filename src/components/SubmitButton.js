import React from 'react';
import './SubmitButton.css';

function SubmitButton({ text }) {
  return <button type="submit" className="submit-button">{text}</button>;
}

export default SubmitButton;
