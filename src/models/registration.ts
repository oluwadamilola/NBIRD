import knex from '../db';

export default class Registration {
  static birthTableName = 'births';
  static deathTableName = 'deaths';

  registerBirth(birthRegistrationFields: BirthRegistrationFields) {
    return knex
      .insert({
        ...birthRegistrationFields,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      })
      .into(Registration.birthTableName);
  }

  registerDeath(deathRegistrationFields: DeathRegistrationFields) {
    return knex
      .insert({
        ...deathRegistrationFields,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      })
      .into(Registration.deathTableName);
  }
}

interface BirthRegistrationFields {
  firstName: string;
  otherName: string;
  dob: string | Date;
  placeOfBirth: string;
  gender: string;
  address: string;
  localGovt: string;
  fatherName: string;
  fatherEmail: string
  fatherState: string;
  fatherNationality: string;
  motherName: string;
  motherEmail: string;
  motherState: string;
  motherNationality: string;
}

interface DeathRegistrationFields {
  firstName: string;
  otherName: string;
  address: string;
  dob: string | Date;
  gender: string;
  maritalStatus: string;
  placeOfDeath: string;
  hospitalNumber: string;
  localGovt: string;
  stateOfOrigin: string;
  causeOfDeath: string;
}
