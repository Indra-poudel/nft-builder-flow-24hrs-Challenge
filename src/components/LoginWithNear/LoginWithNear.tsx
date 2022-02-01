import React from "react";
import './login-with-near.css'
import Button from "../Button";

type LoginWithNearProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const LoginWithNear = ({
    onClick,
}: LoginWithNearProps) => {

    return (
        <div className="login-with-near-wrapper">
            <p>Already have Near account</p>
            <Button label="Log in with Near" onClick={onClick} buttonType="secondary" />
        </div>
    );
};



export default LoginWithNear;
