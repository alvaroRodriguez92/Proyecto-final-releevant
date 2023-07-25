import * as React from 'react';
import { useUserContext } from "../../context/UserContext";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ToolsIcon from "../../assets/toolsicon.avif";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginIcon from '@mui/icons-material/Login';


const styleLogin = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const { user, logout, setErrorMessage } = useUserContext();
    const [activar, setActivar] = useState();
    let logo = "";


    useEffect(() => {
        if (!user) {
            setActivar(false);
            logo = ToolsIcon;
        } else {
            setActivar(true);
            logo = `http://localhost:3000/logo/${user.LOGO_NOMBRE}`;
        }
    }, [user]);


    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
        setErrorMessage(null)
    };

    return (
        <React.Fragment>
            <Button variant="outlined" sx={{ml:"70%",fontWeight: 700 , p:"0.9rem 0.9rem", borderRadius: "16px", boxShadow:"0 0.2rem 0.2rem" }}
                onClick={handleOpen}><LoginIcon sx={{ mr: 1 }}/>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...styleLogin, width: "40rem" }}>
                    <LoginForm/>
                </Box>
            </Modal>
        </React.Fragment>
    );
}
