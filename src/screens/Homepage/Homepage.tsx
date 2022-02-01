import React, { useState } from "react";
import Header from "../../components/Header";
import { logo } from "../../assets/images";
import Tag from "../../components/Tag";
import { VerificationCodeMedium } from "../../constants/constants";
import { HOMEPAGE_LOCALE } from "../../lang/en";
import TextField from "../../components/TextField";
import "./homepage.css";
import Button from "../../components/Button";
import Disclaimer from "../../components/Disclaimer";
import LoginWithNear from "../../components/LoginWithNear/LoginWithNear";
import { isValidEmail, isValidPhoneNo } from "../../utils/validate";

type HomepageProps = {
  onClickLoginWithNear: () => void;
  onClickContinue: () => void;
};

const Homepage = ({ onClickContinue, onClickLoginWithNear }: HomepageProps) => {

  const [selectedMedium, setSelectedMedium] = useState<VerificationCodeMedium>(VerificationCodeMedium.phone);
  const [errorMessage, setErrorMessage] = useState<string>('')

  const [inputText, setInputText] = useState<string>('');

  const setEmailMedium = () => {
    handleTagSelection(VerificationCodeMedium.email)
  }

  const setPhoneMedium = () => {
    handleTagSelection(VerificationCodeMedium.phone)
  }

  const handleContinueClick = () => {
    if (selectedMedium === VerificationCodeMedium.phone) {
      const isValidPhone = isValidPhoneNo(inputText)
      if (isValidPhone) {
        setErrorMessage('')
        //redirect
      } else {
        const errorMessage = "Please enter a valid 10 digit number"
        setErrorMessage(errorMessage)
      }
    }

    if (selectedMedium === VerificationCodeMedium.email) {
      const isEmailValid = isValidEmail(inputText)
      if (isEmailValid) {
        setErrorMessage('')
        //redirect
      }
      else {
        const errorMessage = "Please enter a valid email address"
        setErrorMessage(errorMessage)
      }
    }

  }

  /**
   * This function handle tag selection / Phone or Email
   * @param selectedMedium 
   */
  const handleTagSelection = (selectedMedium: VerificationCodeMedium) => {
    setInputText('')
    setErrorMessage('')
    setSelectedMedium(selectedMedium)
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value)
  }

  return <>
    <Header centerContent={<img src={logo} alt="logo" />} />

    <div className="body-wrapper">
      <div className="tag-tab-wrapper">
        <div className="tag-wrapper">
          <Tag onClick={setPhoneMedium} label={HOMEPAGE_LOCALE.PHONE} tagType={VerificationCodeMedium.phone === selectedMedium ? 'active' : 'inActive'} />
          <Tag onClick={setEmailMedium} label={HOMEPAGE_LOCALE.EMAIL} tagType={VerificationCodeMedium.email === selectedMedium ? 'active' : 'inActive'} />
        </div>

        <div className="email-phone-field-wrapper">
          {selectedMedium === VerificationCodeMedium.phone ?
            <TextField errorMessage={errorMessage} value={inputText} onChange={handleInputChange} inputId='phone' placeholder='Ex (337) 378 8383' />
            : <TextField errorMessage={errorMessage} value={inputText} onChange={handleInputChange} inputId='email' placeholder='indra@example.com' />}
          <Button label="Continue" onClick={handleContinueClick} buttonType={inputText ? 'primary' : 'disable'} />
        </div>
      </div>
      <div className="footer-wrapper">
        <Disclaimer />
        <LoginWithNear onClick={() => { }} />
      </div>
    </div>



  </>;
};

export default Homepage;