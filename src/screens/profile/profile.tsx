import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ProfileHeader from "../../components/ProfileHeader";
import "./profile.css";

/**
 * Profile Page.
 * 
 * @returns JSX Elements
 */
const Homepage = () => {

    const { state } = useLocation() as {
        state: {
            accountId: string,
        }
    };


    return <>
        <ProfileHeader onClickAvatar={() => { }} accountId={state.accountId} />
        <div className="body-wrapper">

        </div>



    </>;
};

export default Homepage;