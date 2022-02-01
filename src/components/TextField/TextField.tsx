import React from "react";
import cn from 'classnames';
import InfoIcon from '@mui/icons-material/Info';
import './text-field.css'

type TextFieldProps = {
    inputId: string,
    label: string,
    placeholder?: string,
    className?: string,
    errorMessage?: string,
    type?: string
}

const TextField = ({
    inputId,
    label,
    className,
    errorMessage,
    type,
    placeholder
}: TextFieldProps) => {
    return (
        <div className={cn('text-field', className, {
            'error-text-field': errorMessage
        })}>
            <span className="label-wrapper">
                <label htmlFor={inputId}>{label}</label> <InfoIcon fontSize="small" />
            </span>
            <input placeholder={placeholder} type={type} id={inputId} name={inputId}></input>
            <span>{errorMessage}</span>
        </div>
    );
};

TextField.defaultProps = {
    type: 'text'
};

export default TextField;
