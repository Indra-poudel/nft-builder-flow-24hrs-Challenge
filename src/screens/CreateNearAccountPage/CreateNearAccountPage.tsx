import React, { useState } from "react";
import Header from "../../components/Header";

import "./create-near-account-page.css";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/TextField";
import Disclaimer from "../../components/Disclaimer";
import LoginWithNear from "../../components/LoginWithNear";
import Button from "../../components/Button";
import { ROUTES } from "../../constants/routes";


const CreateNearAccountPage = () => {

    const navigation = useNavigate();

    const [fullName, setFullName] = useState<string>('')
    const [accountId, setAccountId] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleChange = (event: React.FormEvent<HTMLInputElement>, fieldName: string) => {
        if (fieldName === 'fullName') {
            setFullName(event.currentTarget.value)
        }

        if (fieldName === 'accountId') {
            setAccountId(event.currentTarget.value)
        }
    }

    const handleContinue = () => {
        if (fullName.length >= 5 && accountId.length >= 5) {
            navigation(ROUTES.PROFILE, {
                state: {
                    accountId,
                }
            })
        } else {
            setErrorMessage("Value should contain at least 5 letter")
        }
    }

    return (
        <>
            <Header centerContent="Create NEAR account" enableCancel />

            <div className="body-wrapper">

                <p className="create-account-info">
                    Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.
                </p>

                <div className="full-name-account-field-wrapper">
                    <TextField isError={!!errorMessage} value={fullName} label="Full Name" onChange={(event) => handleChange(event, 'fullName')} inputId='full-name' placeholder={'Ex. John doe'} />
                    <TextField value={accountId} errorMessage={errorMessage} suffixText=".near" onChange={(event) => handleChange(event, 'accountId')} enableInfo label="Account Id" inputId='account-id' placeholder={'yourname'} />
                </div>

                <div className="button-wrapper">
                    <Button label="Continue" onClick={handleContinue} buttonType={(fullName && accountId) ? 'primary' : 'disable'} />
                </div>


                <div className="footer-wrapper">
                    <Disclaimer variant="Account" />
                    <LoginWithNear onClick={() => { }} />
                </div>
            </div>
        </>
    );
};

export default CreateNearAccountPage;