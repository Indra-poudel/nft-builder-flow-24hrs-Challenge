import React from "react";
import OtpInput from 'react-otp-input'
import './otp-input.css'
import TextField from "../TextField";

type OtpFieldProps = {
    noOfInputs?: number,
    onChange: (otp: string) => void,
    value: string,
    errorMessage?: string,
}

const OtpField = ({
    noOfInputs,
    onChange,
    value,
    errorMessage,
}: OtpFieldProps) => {

    return (
        <div className="otp-wrapper">
            <p>Enter verification code</p>
            <div className="otp-input-wrapper">
                <OtpInput
                    className="otp-input"
                    value={value}
                    onChange={onChange}
                    numInputs={noOfInputs}
                />
            </div>
            <span>{errorMessage}</span>
        </div>

    )
};

OtpField.defaultProps = {
    noOfInputs: 6,

};

export default OtpField;
