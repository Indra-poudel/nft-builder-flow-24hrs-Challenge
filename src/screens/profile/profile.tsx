import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';

import ProfileHeader from "../../components/ProfileHeader";
import "./profile.css";
import ProfileDialog from "../../components/ProfileDialog";

/**
 * Profile Page.
 * 
 * @returns JSX Elements
 */
const Profile = () => {

    const { state } = useLocation() as {
        state: {
            accountId: string,
        }
    };

    const [isDialogOpen, setDialogFlag] = useState<boolean>(false)

    const handleAvatarClick = () => {
        setDialogFlag(!isDialogOpen)
    }




    return (
        <>
            <ProfileHeader onClickAvatar={handleAvatarClick} accountId={state.accountId} />
            <div className="body-wrapper">
            </div>
            <ProfileDialog selectedAccountId={state.accountId} isOpen={isDialogOpen} handleClose={() => {
                setDialogFlag(false)
            }} />
        </>
    );
};

export default Profile;