import React, { useState } from 'react';

export default function Forms({ handleChange, handleSubmit, data }) {
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case 'firstName':
        if (value.length < 2) {
          newErrors.firstName = 'First Name must be at least 2 characters long';
        } else {
          newErrors.firstName = '';
        }
        break;
      case 'lastName':
        if (value.length < 2) {
          newErrors.lastName = 'Last Name must be at least 2 characters long';
        } else {
          newErrors.lastName = '';
        }
        break;
      case 'email':
        if (value.length < 5) {
          newErrors.email = 'Email must be at least 5 characters long';
        } else {
          newErrors.email = '';
        }
        break;
      case 'password':
        if (value.length < 8) {
          newErrors.password = 'Password must be at least 8 characters long';
        } else {
          newErrors.password = '';
        }
        if (value !== data.confirmPassword) {
          newErrors.confirmPassword = 'Passwords must match';
        } else {
          newErrors.confirmPassword = '';
        }
        break;
      case 'confirmPassword':
        if (value !== data.password) {
          newErrors.confirmPassword = 'Passwords must match';
        } else {
          newErrors.confirmPassword = '';
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    validateField(name, value);
  };

  return (
    <div className="form-container">
      <h2>Mas Formularios</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name
            <input type="text" name="firstName" value={data.firstName} onChange={handleInputChange} />
          </label>
          <span>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </span>
        </div>
        <div>
          <label>
            Last Name
            <input type="text" name="lastName" value={data.lastName} onChange={handleInputChange} />
          </label>
          <span>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </span>
        </div>
        <div>
          <label>
            Email
            <input type="email" name="email" value={data.email} onChange={handleInputChange} />
          </label>
          <span>
            {errors.email && <p className="error">{errors.email}</p>}
          </span>
        </div>
        <div>
          <label>
            Password
            <input type="password" name="password" value={data.password} onChange={handleInputChange} />
          </label>
          <span>
            {errors.password && <p className="error">{errors.password}</p>}
          </span>
        </div>
        <div>
          <label>
            Confirm your password
            <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleInputChange} />
          </label>
          <span>
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </span>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
