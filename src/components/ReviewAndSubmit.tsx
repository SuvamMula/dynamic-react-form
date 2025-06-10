import React from 'react';
import type { FormData } from '../types';

interface ReviewAndSubmitProps {
  formData: FormData;
}

const ReviewAndSubmit: React.FC<ReviewAndSubmitProps> = ({ formData }) => {
  console.log('Inside ReviewAndSubmit - formData:', JSON.stringify(formData, null, 2)); // Add this line
  return (
    <div className="form-step review-step">
      <h2>Review and Submit</h2>
      <div>
        <h3>Personal Information</h3>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p><strong>Address Line 1:</strong> {formData.addressLine1}</p>
        {formData.addressLine2 && <p><strong>Address Line 2:</strong> {formData.addressLine2}</p>}
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Zip Code:</strong> {formData.zipCode}</p>
      </div>
    </div>
  );
};

export default ReviewAndSubmit;
