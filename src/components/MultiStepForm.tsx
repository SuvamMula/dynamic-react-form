import React from 'react';
import PersonalInformation from './PersonalInformation.tsx';
import AddressInformation from './AddressInformation.tsx';
import ReviewAndSubmit from './ReviewAndSubmit.tsx';
import useForm from '../hooks/useForm';
import type { FormData } from '../types'; // Changed this line

const initialValues: FormData = {
  // PersonalInformation
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  // AddressInformation
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
};

const MultiStepForm: React.FC = () => {
  const {
    currentStep,
    formData,
    isFirstStep,
    isLastStep,
    handleInputChange,
    nextStep,
    prevStep,
    errors,
    validateStep,
  } = useForm(initialValues, ['personalInfo', 'addressInfo', 'review']);

  const handleSubmit = (): void => {
    // Handle final form submission
    console.log('Form submitted new:', formData);
   // localStorage.removeItem('formData'); // Clear localStorage after submission
  };

  const renderStep = (): React.JSX.Element | null => {
    if (currentStep === 2) {
      // Log formData when rendering the review step
      console.log('Rendering Review Step - formData:', JSON.stringify(formData, null, 2));
    }
    switch (currentStep) {
      case 0:
        return <PersonalInformation formData={formData} handleInputChange={handleInputChange} errors={errors} />;
      case 1:
        return <AddressInformation formData={formData} handleInputChange={handleInputChange} errors={errors} />;
      case 2:
        return <ReviewAndSubmit formData={formData} />;
      default:
        return null;
    }
  };

  const handleNext = (): void => {
    if (validateStep(currentStep)) {
      nextStep();
    }
  };


  return (
    <div className="multi-step-form">
      <div className="step-indicator">
        Step {currentStep + 1} of 3
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        {renderStep()}
        <div className="navigation-buttons">
          {!isFirstStep && <button type="button" onClick={prevStep}>Back</button>}
          {!isLastStep && <button type="button" onClick={handleNext}>Next</button>}
          {isLastStep && <button type="submit" onClick={handleSubmit}>Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
