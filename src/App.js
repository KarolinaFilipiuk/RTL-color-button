import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { logRoles } from '@testing-library/dom';

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
        style={{ backgroundColor: isBlue ? 'blue' : 'red' }}
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
    </div>
  );
};

export default App;
