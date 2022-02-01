import React from 'react';
import Button from './components/Button';
import Tag from './components/Tag';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Button label="Button" buttonType='primary' />
      <Button label="Secondary" buttonType='secondary' />
      <Button label="Disable" buttonType='disable' />
      <Tag label='active' />
      <Tag label='inActive' tagType='inActive' />
      <TextField inputId='firstName' label='FirstName' />
      <TextField inputId='label' label='Label' placeholder='Placeholder' />
      <TextField inputId='label' label='Label' placeholder='Placeholder' errorMessage='Please enter your first name' />
    </div>
  );
}

export default App;
