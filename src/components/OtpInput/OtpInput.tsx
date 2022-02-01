import React from "react";
import './otp-input.css'
import TextField from "../TextField";

type OtpInputProps = {
    noOfInputs?: number
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
    value?: string
}

const OtpInput = ({
    noOfInputs,
    onChange,
    value
}: OtpInputProps) => {

    const sliceValue: Array<string> | undefined = value?.split('')

    return (
        <div className="otp-input-wrapper">
            {

                [...Array(noOfInputs)].map((index: number) =>
                    <TextField className="otp-input" maxLength={1} onChange={onChange} value={sliceValue ? (sliceValue[index] || '') : ''} inputId={`otp-${index}`} />
                )
            }
        </div>
    )
};

OtpInput.defaultProps = {
    noOfInputs: 6,
    value: '10101020'

};

export default OtpInput;
