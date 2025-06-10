import React from 'react';
import type { FormData, FormErrors } from '../types/index.ts'; // Changed this line

interface PersonalInformationProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormErrors;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ formData, handleInputChange, errors }) => {
  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default PersonalInformation;
