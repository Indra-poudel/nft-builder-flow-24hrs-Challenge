import React from 'react';
import OtpInput from './components/OtpInput';
import Homepage from './screens/Homepage';

function App() {
  return (
    <div className="App">
      {/* <Button label="Button" buttonType='primary' />
      <Button label="Secondary" buttonType='secondary' />
      <Button label="Disable" buttonType='disable' />
      <Tag label='active' />
      <Tag label='inActive' tagType='inActive' />
      <TextField inputId='firstName' label='FirstName' />
      <TextField inputId='label' label='Label' placeholder='Placeholder' />
      <TextField inputId='label' label='Label' placeholder='Placeholder' errorMessage='Please enter your first name' />
      <Header centerContent={<>
        <img src={logo} alt='logo' />
      </>} />

      <Header centerContent={'Verification'} enableCancel />
      <br /> */}
      <Homepage onClickContinue={() => { }} onClickLoginWithNear={() => { }} />
      <OtpInput onChange={() => { }} />
    </div>
  );
}

export default App;
