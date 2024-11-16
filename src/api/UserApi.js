export const userLogIn = async (loginData) => {
  try {
    const response = await fetch('/bookify-service/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else {
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
    const response = await fetch('/bookify-service/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
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
    const response = await fetch('/bookify-service/auth/access-refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.status === 200) {
      const responseData = await response.json();
      localStorage.setItem('user', JSON.stringify(responseData));
      return responseData;
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
    console.log(confirmationData)
    const response = await fetch(`/bookify-service/auth/${confirmationData.email}/email-confirmation`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(confirmationData)
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Confirmation failed');
    }
  } catch (error) {
    console.error('Confirmation error:', error);
    return {
      "message": "" 
    };
  }
};

export const resendConfirmationCode = async (emailData) => {
  try {
    const response = await fetch(`/bookify-service/auth/${emailData}/email-confirmation-code`, {
      method: 'PUT',
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
    const response = await fetch(`/bookify-service/auth/${email}/password-reset-code`, {
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
    const response = await fetch(`/bookify-service/auth/${resetData.userEmail}/password-reset`, {
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
export const signOut = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const refreshToken = user?.accessToken;
    const response = await fetch(`/bookify-service/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`
      }
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Sign out failed');
    }
  } catch (error) {
    console.error('Sign out error:', error);
    return {
      "message": ""
    };
  }
};