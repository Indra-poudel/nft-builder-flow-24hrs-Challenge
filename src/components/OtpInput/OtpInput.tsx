import React from "react";
import './otp-input.css'
import TextField from "../TextField";

type OtpInputProps = {
    noOfInputs?: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    errorMessage?: string,
}

const OtpInput = ({
    noOfInputs,
    onChange,
    value,
    errorMessage,
}: OtpInputProps) => {

    const splitValue: Array<string> | undefined = value.split('')

    // console.log(splitValue)

    return (
        <div className="otp-wrapper">
            <p>Enter verification code</p>
            <div className="otp-input-wrapper">
                {

                    [...Array(noOfInputs)].map((value: number, index: number) =>
                        <TextField key={index} className="otp-input" maxLength={1} onChange={onChange} value={splitValue[index]} inputId={`otp-${index}`} />
                    )
                }
            </div>
            <span>{errorMessage}</span>
        </div>

    )
};

OtpInput.defaultProps = {
    noOfInputs: 6,

};

export default OtpInput;
