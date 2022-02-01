import React from 'react';
import Button from './components/Button';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App">
      <Button label="Button" buttonType='primary' />
      <Button label="Secondary" buttonType='secondary' />
      <Button label="Disable" buttonType='disable' />
      <Tag label='active' />
      <Tag label='inActive' tagType='inActive' />
    </div>
  );
}

export default App;
