export interface FormData {
  // PersonalInformation
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // AddressInformation
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}
