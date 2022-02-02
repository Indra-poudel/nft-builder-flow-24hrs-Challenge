import React, { useState } from "react";
import Header from "../../components/Header";

import "./verification-page.css";
import Button from "../../components/Button";
import { isValidPhoneNo } from "../../utils/validate";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "../../components/OtpInput";
import { ROUTES } from "../../constants/routes";


const VerificationPage = () => {

    const navigation = useNavigate();

    const { state } = useLocation() as {
        state: {
            inputText: string,
        }
    };

    const isValidPhone = isValidPhoneNo(state.inputText)

    const [inputOpt, setInputOpt] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleInputChange = (otp: string) => {
        setInputOpt(otp)
    }

    const handleContinueClick = () => {
        console.log("calling")
        if (inputOpt.length === 6) {
            navigation(ROUTES.CREATE_USING_NEAR)
        } else {
            setErrorMessage('Please enter a valid opt number')
        }
    }

    return <>
        <Header centerContent="Verification" enableCancel />

        <div className="body-wrapper">
            <p className="info-text">
                {`We've sent a 6-digit verification code to the ${isValidPhone ? `phone` : `email address`} `}
                <br />
                <span className="phone-email">{state.inputText}</span>
            </p>
            <OtpInput errorMessage={errorMessage} value={inputOpt} onChange={handleInputChange} />


            <div className="button-wrapper">
                <Button label="Continue" onClick={handleContinueClick} buttonType={inputOpt.length === 6 ? 'primary' : 'disable'} />
            </div>

            <hr />

            <div className="verification-info">
                <p>Didn't received your code ?</p>

                <p className="link">Send to different email address</p>

                <p className="link">Resend your code</p>
            </div>


        </div>



    </>;
};

export default VerificationPage;