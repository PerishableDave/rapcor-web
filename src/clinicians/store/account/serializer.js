import { 
  serializePhone,
  deserializePhone
} from '../../../lib/serializer-helpers'

export const deserialize = (json) => {
  const { clinician } = json

  return {
    firstName: clinician.first_name,
    lastName: clinician.last_name,
    middleName: clinician.middle_name,
    email: clinician.email,
    phoneNumber: deserializePhone(clinician.phone_number),
    address: clinician.thoroughfare,
    address2: clinician.premise,
    city: clinician.locality,
    state: clinician.administrative_area,
    zip: clinician.postal_code,
    country: clinician.country,
  }
}

export const serialize = (clinician) => {
  return {
    first_name: clinician.firstName,
    last_name: clinician.lastName,
    middle_name: clinician.middle_name,
    email: clinician.email,
    phone_number: serializePhone(clinician.phoneNumber),
    thoroughfare: clinician.address,
    premise: clinician.address2,
    locality: clinician.city,
    administrative_area: clinician.state,
    postal_code: clinician.zip,
    country: clinician.country,
    password: clinician.password
  }
}
 
