export const userLogIn = async (loginData) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return {
        accessToken: responseData.accessToken,
        username: responseData.userName,
        role: responseData.roles[0].toUpperCase()
    }} else {
      throw new Error('Log in failed');
    }
  } catch (error) {
    console.error('Log in error:', error);
    return {
      "accessToken": "",
      "role": "",
      "username": ""
    };
  }
};

export const userRegister = async (registerData) => {
  try {
    const response = await fetch('/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    });
    if (response.status === 201) {
      return {
        "message": "Email sent.", 
      };
    } else {
      const responseData = await response.json();
      throw new Error(responseData.errors[0].message);
    }
  } catch (error) {
    console.error('Register error:', error.message);
    return {
      "message": "ERROR" + error.message,
    };
  }
};


export const userAccessRefresh = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const accessToken = user?.accessToken;
    const response = await fetch('/auth/access-refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.status === 200) {
      const responseData = await response.json();
      const userData = JSON.stringify(responseData)
      const userObject = {
        accessToken: userData.accessToken,
        username: userData.username,
        role: userData.roles[0].toUpperCase()
      }
      localStorage.setItem('user', userObject);
      return userObject;
    } else {
      throw new Error('Access refresh failed');
    }
  } catch (error) {
    console.error('Access refresh error:', error);
    return {
      "acessToken": "",
      "role": "",
      "username": ""
    };
  }
};

export const confirmCode = async (confirmationData) => {
  try {
    const requestData = {
      userEmail: confirmationData.email,
      confirmationCode: confirmationData.confirmationCode
    }
    const response = await fetch(`/auth/email-confirmation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    if (response.status === 200) {
      return {
        "message": "Email confirmed successfully",
      };
    } else {
      throw new Error('Confirmation failed');
    }
  } catch (error) {
    console.error('Confirmation error:', error);
    return {
      "message": "ERROR: Email confirmation unsuccessful." 
    };
  }
};

export const resendConfirmationCode = async (emailData) => {
  try {
    const response = await fetch(`/auth/email-confirmation-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Resend failed');
    }
  } catch (error) {
    console.error('Resend code error:', error);
    return {
      "message": "",
    };
  }
};

export const getPasswordResetCode = async (email) => {
  try {
    const response = await fetch(`/auth/${email}/password-reset-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Code send failed');
    }
  } catch (error) {
    console.error('Code send error:', error);
    return {
      "message": ""
    };
  }
};

export const resetPassword = async (resetData) => {
  try {
    const response = await fetch(`/auth/${resetData.userEmail}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resetData)
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Password refresh failed');
    }
  } catch (error) {
    console.error('Password refresh error:', error);
    return {
      "message": ""
    };
  }
};