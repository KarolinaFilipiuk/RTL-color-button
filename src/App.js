import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [isBlue, setIsBlue] = useState(true);
  const [isDisabled, setIsDidabled] = useState(false);

  const handleClick = () => {
    setIsBlue(!isBlue);
  };

  const handleChecked = () => {
    setIsDidabled(!isDisabled);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: isDisabled ? 'gray' : isBlue ? 'blue' : 'red',
        }}
        name={isBlue ? 'Change to red' : 'Change to blue'}
        disabled={isDisabled}
      >
        {isBlue ? 'Change to red' : 'Change to blue'}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={handleChecked}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
};

export default App;
