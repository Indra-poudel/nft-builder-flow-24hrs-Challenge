import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button label="Button" buttonType='primary' />
      <Button label="Secondary" buttonType='secondary' />
      <Button label="Disable" buttonType='disable' />
    </div>
  );
}

export default App;
