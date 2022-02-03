import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Tag from "../../components/Tag";
import { logo } from "../../assets/images";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { HOMEPAGE_LOCALE } from "../../lang/en";
import { ROUTES } from "../../constants/routes";
import TextField from "../../components/TextField";
import Disclaimer from "../../components/Disclaimer";
import { VerificationCodeMedium } from "../../constants/constants";
import { isValidEmail, isValidPhoneNo } from "../../utils/validate";
import LoginWithNear from "../../components/LoginWithNear/LoginWithNear";
import "./homepage.css";

/**
 * PageLevel Component of Homepage.
 * 
 * @returns JSX Elements
 */
const Homepage = () => {

  const navigation = useNavigate();
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
        navigation(ROUTES.VERIFICATION, {
          state: {
            inputText: inputText,
          }
        })
      } else {
        setErrorMessage(HOMEPAGE_LOCALE.ERROR_MESSAGE.PHONE)
      }
    }

    if (selectedMedium === VerificationCodeMedium.email) {
      const isEmailValid = isValidEmail(inputText)
      if (isEmailValid) {
        setErrorMessage('')
        navigation(ROUTES.VERIFICATION, {
          state: {
            inputText: inputText,
          }
        })
      }
      else {
        setErrorMessage(HOMEPAGE_LOCALE.ERROR_MESSAGE.EMAIL)
      }
    }
  }

  const handleLoginWithNear = () => {
    navigation(ROUTES.CREATE_USING_NEAR)
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
            <TextField errorMessage={errorMessage} value={inputText} onChange={handleInputChange} inputId='phone' placeholder={HOMEPAGE_LOCALE.PLACEHOLDER.PHONE} />
            : <TextField errorMessage={errorMessage} value={inputText} onChange={handleInputChange} inputId='email' placeholder={HOMEPAGE_LOCALE.PLACEHOLDER.EMAIL} />}
          <Button label="Continue" onClick={handleContinueClick} buttonType={inputText ? 'primary' : 'disable'} />
        </div>
      </div>
      <div className="footer-wrapper">
        <Disclaimer />
        <LoginWithNear onClick={handleLoginWithNear} />
      </div>
    </div>



  </>;
};

export default Homepage;