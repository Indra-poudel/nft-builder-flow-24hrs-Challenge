import React from "react";
import cn from 'classnames';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './button.css'

type ButtonProps = {
    label: string,
    buttonType?: 'primary' | 'secondary' | 'disable'
    className?: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disable?: boolean
}

const Button = ({
    label,
    buttonType,
    className,
    onClick,
    disable
}: ButtonProps) => {

    return (
        <button
            disabled={disable}
            className={cn('button', `${buttonType}-button`, className)}
            onClick={onClick}
        >
            <span className="button-label">{label}</span> <ChevronRightIcon />
        </button>
    );
};

Button.defaultProps = {
    buttonType: 'primary',
    onClick: () => { },
};

export default Button;
