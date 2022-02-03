import React from "react";
import Dialog from '@mui/material/Dialog';
import DoneIcon from '@mui/icons-material/Done';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import './ProfileDialog.css'
import { selectedUser } from "../../assets/images";
import { USER_ACCOUNTS } from "../../mock/users";

type ProfileDialogProps = {
    handleClose: () => void
    isOpen: boolean,
    selectedAccountId: string,
}

type Users = {
    userName: string,
    isSelected: boolean,
    near: string,
    avatar: string,
}

const ProfileDialog = ({
    handleClose,
    isOpen,
    selectedAccountId
}: ProfileDialogProps) => {
    const USERS: Users[] = [
        {
            userName: selectedAccountId,
            isSelected: true,
            near: '0.34 Near',
            avatar: selectedUser,

        },
        ...USER_ACCOUNTS
    ]

    const MENU_OPTIONS = [
        {
            menuName: 'Create Account',
            icon: <AddCircleOutlineIcon />
        },
        {
            menuName: 'Import Account',
            icon: <ArrowCircleDownIcon />
        }
    ]

    return (
        <Dialog onClose={handleClose} open={isOpen}>
            <div className="card-wrapper">
                <div className="card-upper-section">
                    <div className="dialog-title">My Account</div>
                    {
                        USERS.map((user, index) => (
                            <div key={index} className="select-user-wrapper">
                                <div className="select-user-prefix">
                                    <img alt="avatar" src={user.avatar} />
                                    <div className="user-name-wrapper">
                                        <span className="selected-user-name">
                                            {user.userName}
                                        </span>
                                        <span className="near-value">
                                            {user.near}
                                        </span>
                                    </div>
                                </div>
                                <div className="select-user-suffix">
                                    {user?.isSelected && <DoneIcon fontSize="medium" />}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="card-lower-section">
                    {
                        MENU_OPTIONS.map((option) => (
                            <div className="lower-menu">
                                <div className="menu-name">
                                    {option.icon}
                                    <span>{option.menuName} </span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>


        </Dialog>
    );
};

ProfileDialog.defaultProps = {
    handleClose: () => { },
    open: true
};

export default ProfileDialog;
