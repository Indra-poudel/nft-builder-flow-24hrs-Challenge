import React from "react";
import './disclaimer.css'

type DisclaimerType = {
    variant?: 'Link' | 'Account'

}

const Disclaimer = ({ variant }: DisclaimerType) => {

    if (variant === 'Account')
        return (
            <p className="disclaimer-text">By creating a NEAR account, you must agree to near labs <a href="/#" className="link">
                Terms & Conditions </a>and <a href="/#" className="link"> Privacy Policy</a></p>
        );

    return (
        <p className="disclaimer-text">by clicking continue you must agree to near labs <a href="/#" className="link">
            Terms & Conditions </a>and <a href="/#" className="link"> Privacy Policy</a></p>
    );
};

Disclaimer.defaultProps = {
    variant: 'Link'
}


export default Disclaimer;
