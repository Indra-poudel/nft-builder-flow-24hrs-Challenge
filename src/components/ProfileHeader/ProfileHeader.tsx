import React from "react";
import './ProfileHeader.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { bell, smallLogo, setting, avatar } from "../../assets/images";

type ProfileHeaderProps = {
    onClickAvatar: () => void
    accountId: string,
}

const ProfileHeader = ({
    onClickAvatar,
    accountId
}: ProfileHeaderProps) => {

    return (
        <div className='profile-header'>
            <div className="near-logo-wrapper" >
                <img alt="near-logo" src={smallLogo} />
            </div>
            <div className="profile-avatar" onClick={onClickAvatar}>
                <img alt="avatar" src={avatar} />
                <span className="username">
                    {accountId}
                </span>
                <ArrowDropDownIcon fontSize="large" />
            </div>
            <div className="prefix-icons">
                <img alt="bell" src={bell} />
                <img alt="setting-icon" src={setting} />
            </div>
        </div >
    );
};

ProfileHeader.defaultProps = {
    onClickAvatar: () => { },
};

export default ProfileHeader;
