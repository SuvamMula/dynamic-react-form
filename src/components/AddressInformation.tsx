import React from 'react';
import type { FormData, FormErrors } from '../types/index.ts';

interface AddressInformationProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormErrors;
}

const AddressInformation: React.FC<AddressInformationProps> = ({ formData, handleInputChange, errors }) => {
  return (
    <div className="form-step">
      <h2>Address Information</h2>
      <div className="form-group">
        <label htmlFor="addressLine1">Address Line 1</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleInputChange}
        />
        {errors.addressLine1 && <span className="error-message">{errors.addressLine1}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="addressLine2">Address Line 2 (Optional)</label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        {errors.state && <span className="error-message">{errors.state}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
        />
        {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
      </div>
    </div>
  );
};

export default AddressInformation;
