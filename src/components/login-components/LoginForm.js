import React, { useState, useEffect } from 'react';
import '../../css/LoginForm.css';
import '../../App.css';
import { userRegister, userLogIn, resetPassword } from "../../api/UserApi";
import InputField from './InputField';
import ConfirmationModal from '../modals/ConfirmationModal';
import InputEmailModal from '../modals/InputEmailModal';
import ResetPasswordModal from '../modals/ResetPasswordModal';
import StatusMessageModal from '../modals/StatusMessageModal';
import { useAuth } from '../../context/AuthContext';
import { useRole } from '../../context/RoleContext';

const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isInputEmailModalOpen, setIsInputEmailModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const { login } = useAuth();
  const { updateRole } = useRole();

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setHasError(false);
    setErrorMessage('');
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasError(false);
    setErrorMessage('');
  
    const { username, password, firstName, lastName, email } = formData;

    if (!username || !password || (isRegistering && (!firstName || !lastName || !email))) {
      setIsStatusModalOpen(true);
      return;
    }
  
    if (isRegistering) {
      try {
        const registerResponse = await userRegister(formData);
        if (registerResponse.message.startsWith("ERROR")) {
          setHasError(true);
          setErrorMessage(registerResponse.message.substring(5));
          setIsStatusModalOpen(true);
        } else if (registerResponse.message === "Email sent.") {
          console.log("Registration successful");
          setIsConfirmationModalOpen(true); 
        }
      } catch (error) {
        setHasError(true);
        const errorMessageWithoutPrefix = error.message.replace("ERROR", "").trim();
        setErrorMessage(`Register error: ${errorMessageWithoutPrefix}`);
        setIsStatusModalOpen(true);
      }
    } else {
      try {
        const loginResponse = await userLogIn({ username: formData.username, password: formData.password });
        if (loginResponse.accessToken) {
          login(loginResponse);
          if (loginResponse.role) {
            updateRole(loginResponse.role);
          }
        } else {
          throw new Error('Invalid credentials');
        }
      } catch (error) {
        setHasError(true);
        setErrorMessage(`Log in failed: ${error.message}`);
        setIsStatusModalOpen(true);
      }
    }
  };


  const handleModalConfirm = (confirmationCode) => {
    console.log('Confirmed with code:', confirmationCode);
    setIsConfirmationModalOpen(false);
    setIsRegistering(false);
  };

  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleForgotPasswordClick = () => {
    setIsInputEmailModalOpen(true);
  };

  const handleInputEmailModalClose = () => {
    setIsInputEmailModalOpen(false);
  };

  const handleInputEmailSubmit = (email) => {
    console.log("Reset password request for email:", email);
    setIsInputEmailModalOpen(false);
  };

  const handleInputEmailSuccess = (email) => {
    console.log("Password reset code sent to email:", email);
    setIsInputEmailModalOpen(false);
    setIsResetPasswordModalOpen(true);
  };

  const handleResetPasswordModalClose = () => {
    setIsResetPasswordModalOpen(false);
  };

  const handleCloseStatusModal = () => {
    setIsStatusModalOpen(false);
  };

  const { username, password, firstName, lastName, email} = formData;

  return (
    <div className="login-div">
      <div className="bg-img"></div>
      <div className="content">
        <p id="login-title">Let's dive into the magical world of literature!</p>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <InputField type="text" name="firstName" placeholder="First name" value={firstName} onChange={handleChange} hasError={hasError} />
              <InputField type="text" name="lastName" placeholder="Last name" value={lastName} onChange={handleChange} hasError={hasError} />
              <InputField type="email" name="email" placeholder="Email" value={email} onChange={handleChange} hasError={hasError} />
            </>
          )}
          <InputField type="text" name="username" placeholder="Username" value={username} onChange={handleChange} hasError={hasError} />
          <InputField type="password" name="password" placeholder="Password" value={password} onChange={handleChange} hasError={hasError} />
          {!isRegistering && <p className="link-el forgot-password" onClick={handleForgotPasswordClick}>Forgot password?</p>}
          <div className='login-b-div'>
            <button className="button-element login-button dark-button" type="submit">{isRegistering ? 'Register' : 'Log in'}</button>
          </div>
        </form>
        <div className="options">
          {isRegistering ? (
            <>
              <p>Already have an account?</p>
              <p className="link-el" onClick={toggleForm}>Log in</p>
            </>
          ) : (
            <>
              <p>Don't have an account?</p>
              <p className="link-el" onClick={toggleForm}>Register</p>
            </>
          )}
        </div>
      </div>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={handleConfirmationModalClose}
        onConfirm={handleModalConfirm}
        email={email}
        setIsRegistering={setIsRegistering} 
      />
      {isInputEmailModalOpen && (
        <InputEmailModal
          onSubmit={handleInputEmailSubmit}
          onClose={handleInputEmailModalClose}
          onSuccess={handleInputEmailSuccess}
        />
      )}
      {isResetPasswordModalOpen && (
        <ResetPasswordModal
          onClose={handleResetPasswordModalClose}
          onSubmit={ () => setIsResetPasswordModalOpen(false)}
          resetPassword={async (resetData) => 
            await resetPassword(resetData)
          }
        />
      )}
      {isStatusModalOpen && (
        <StatusMessageModal
          isOpen={isStatusModalOpen}
          onClose={handleCloseStatusModal}
          message={errorMessage}
        />
      )}
    </div>
  );
};

export default LoginForm;