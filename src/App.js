import React from 'react';
import './App.css';
import LoginContainer from './components/LoginContainer';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </div>
  );
}

export default App;
