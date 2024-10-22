import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log(formData);
  };

  // Google login success handler
  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Success:", response);
  };

  // Google login failure handler
  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <div className="login-signup">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {!isLogin && (
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don’t have an account? Signup' : 'Already have an account? Login'}
      </p>

      <h2>Sign Up with Google</h2>
      <GoogleOAuthProvider clientId="542597503461-khnhdequlg5sc09scokrdios6m1btjr7.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginSignup;
