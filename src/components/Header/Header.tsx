import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import cn from 'classnames';
import './header.css'

type HeaderProps = {
    centerContent: React.ReactNode | String,
    enableCancel?: boolean,
    className?: string,
    onClickCancel?: () => void
}

const Header = ({
    centerContent,
    enableCancel,
    className,
    onClickCancel
}: HeaderProps) => {

    return (
        <div className={cn('header', {
            'header-justify-center': !enableCancel,
            'header-justify-space-between': enableCancel
        }, className)}>
            <div />
            {centerContent}
            {enableCancel && <CancelIcon onClick={onClickCancel} fontSize="small" />}
        </div >
    );
};

Header.defaultProps = {
    enableCancel: false,
};

export default Header;
