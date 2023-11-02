import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../../redux/feartures/authModalSlice";
import Login from "./Login";
import ChangePassword from "./ChangePassword";
import bg1 from "../../image/bg1.svg";

const actionStates = {
    login: "login",
    changePassword: "changePassword",
};

const AuthModal = () => {
    const { authModalOpen } = useSelector((state) => state.authModal);

    // const dispatch = useDispatch();

    const [action, setAction] = useState(actionStates.login);

    useEffect(() => {
        if (authModalOpen) setAction(actionStates.login);
    }, [authModalOpen]);

    // const handleClose = () => dispatch(setAuthModalOpen(false));

    const switchAuthState = (state) => setAction(state);

    return (
        <Box sx={{
            backgroundImage: `url(${bg1})`,
            width: "100%",
            minHeight: "100vh"
        }}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: "600px",
                    padding: 4,
                    outline: "none",


                }}
            >
                <Box
                    sx={{
                        padding: 4,
                        boxShadow: 24,
                        backgroundColor: "background.paper",
                    }}
                >
                    <Box
                        sx={{ textAlign: "center", marginBottom: "2rem", width: "400px" }}
                    >
                    </Box>

                    {action === actionStates.login && (
                        <Login
                            switchAuthState={() => switchAuthState(actionStates.changePassword)}
                        />
                    )}
                    {action === actionStates.changePassword && (
                        <ChangePassword
                            switchAuthState={() => switchAuthState(actionStates.login)}
                        />
                    )}
                </Box>
            </Box>
        </Box>

    );
};

export default AuthModal;
