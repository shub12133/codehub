import React, { useState, useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import Register from "./Register";
// import TermsOfServiceDialog from "./TermsOfServiceDialog";
import Login from "./Login";
import ChangePasswordDialog from "./ChangePasswordDialog";
import ModalBackdrop from "../../shared/components/ModalBackdrop";

function DialogSelector(props) {
  const {
    dialogOpen,
    openTermsDialog,
    openRegister,
    openLogin,
    openChangePassword,
    onClose,
  } = props;
  const [loginStatus, setLoginStatus] = useState(null);
  const [registerStatus, setRegisterStatus] = useState(null);

  const _onClose = useCallback(() => {
    setLoginStatus(null);
    setRegisterStatus(null);
    onClose();
  }, [onClose, setLoginStatus, setRegisterStatus]);

  const printDialog = useCallback(() => {
    switch (dialogOpen) {
      case "register":
        return (
          <Register
            onClose={_onClose}
            openTermsDialog={openTermsDialog}
            status={registerStatus}
            setStatus={setRegisterStatus}
          />
        );
      // case "termsOfService":
      //   return <TermsOfServiceDialog onClose={openRegisterDialog} />;
      // case "login":
        return (
          <Login
            onClose={_onClose}
            status={loginStatus}
            setStatus={setLoginStatus}
            openChangePassword={openChangePassword}
          />
        );
      case "changePassword":
        return (
          <ChangePasswordDialog
            setLoginStatus={setLoginStatus}
            onClose={openLogin}
          />
        );
      default:
    }
  }, [
    dialogOpen,
    openChangePassword,
    openLogin,
    openRegister,
    openTermsDialog,
    _onClose,
    loginStatus,
    registerStatus,
    setLoginStatus,
    setRegisterStatus,
  ]);

  return (
    <Fragment>
      {dialogOpen && <ModalBackdrop open />}
      {printDialog()}
    </Fragment>
  );
}

DialogSelector.propTypes = {
  dialogOpen: PropTypes.string,
  openLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  openRegister: PropTypes.func.isRequired,
  openChangePassword: PropTypes.func.isRequired,
};

export default DialogSelector;
