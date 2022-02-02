import React, { useState } from "react";
import cn from 'classnames';
import InfoIcon from '@mui/icons-material/Info';
import './text-field.css'

type TextFieldProps = {
    inputId: string,
    label?: string,
    placeholder?: string,
    className?: string,
    errorMessage?: string,
    type?: string,
    value?: string,
    maxLength?: number,
    enableInfo?: boolean,
    suffixText?: string,
    isError?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({
    inputId,
    label,
    className,
    errorMessage,
    type,
    placeholder,
    value,
    onChange,
    maxLength,
    enableInfo,
    suffixText,
    isError,
}: TextFieldProps) => {

    const [isFocus, setFocus] = useState<boolean>(false)
    const [isBlur, setBlur] = useState<boolean>(true)

    const handleFocus = () => {
        setFocus(true)
        setBlur(false)
    }

    const handleBlur = () => {
        setBlur(true)
        setFocus(false)
    }

    return (
        <div className={cn('text-field', className, {
            'error-text-field': errorMessage || isError
        })}>
            {label && (<span className="label-wrapper">
                <label htmlFor={inputId}>{label}</label> {enableInfo && <InfoIcon fontSize="small" />}
            </span>)}
            <div className={cn('input-field', {
                isFocus,
                isBlur
            })}>
                <input maxLength={maxLength} value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} placeholder={placeholder} type={type} id={inputId} name={inputId}></input>
                {suffixText && (<div className="input-suffix">
                    {suffixText}
                </div>)}
            </div>
            <span>{errorMessage}</span>
        </div>
    );
};

TextField.defaultProps = {
    type: 'text'
};

export default TextField;
