import { useState, useEffect } from 'react';
import type { FormData, FormErrors } from '../types'; // Changed this line
import { loadState, saveState } from '../utils/localStorage';

const useForm = (initialValues: FormData, stepNames: string[]) => {
  const [currentStep, setCurrentStep] = useState<number>(loadState('currentStep') || 0);
  const [formData, setFormData] = useState<FormData>(loadState('formData') || initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    saveState('formData', formData);
    saveState('currentStep', currentStep);
  }, [formData, currentStep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, stepNames.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === stepNames.length - 1;

  const validateStep = (stepIndex: number): boolean => {
    const currentStepName = stepNames[stepIndex];
    const newErrors: FormErrors = {};
    let isValid = true;

    if (currentStepName === 'personalInfo') {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
        isValid = false;
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
        isValid = false;
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        isValid = false;
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
        isValid = false;
      } else if (formData.phone.replace(/\D/g, '').length < 5) { // Check for a minimum of 5 digits
        newErrors.phone = 'Phone number must be at least 5 digits';
        isValid = false;
      }
    } else if (currentStepName === 'addressInfo') {
      if (!formData.addressLine1) {
        newErrors.addressLine1 = 'Address Line 1 is required';
        isValid = false;
      }
      if (!formData.city) {
        newErrors.city = 'City is required';
        isValid = false;
      }
      if (!formData.state) {
        newErrors.state = 'State is required';
        isValid = false;
      }
      if (!formData.zipCode) {
        newErrors.zipCode = 'Postal code is required'; // Changed label to Postal code
        isValid = false;
      } else if (formData.zipCode.length < 3) { // Basic check for minimum length, can be adjusted
        newErrors.zipCode = 'Postal code seems too short';
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };


  return {
    currentStep,
    formData,
    errors,
    isFirstStep,
    isLastStep,
    handleInputChange,
    nextStep,
    prevStep,
    validateStep,
  };
};

export default useForm;
