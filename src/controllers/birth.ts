import * as express from 'express';
import Registration from '../models/registration';
import { wss } from '../index';

export function getBirthForm(req: express.Request, res: express.Response) {
  res.render('birthreg');
}

export async function registerBirth(req: express.Request, res: express.Response) {
  const {
    firstName,
    otherName,
    dob,
    placeOfBirth,
    gender,
    address,
    localGovt,
    fatherName,
    fatherEmail,
    fatherState,
    fatherNationality,
    motherName,
    motherEmail,
    motherState,
    motherNationality,
  } = req.body;

  // Todo: Any form of validation.

  const model = new Registration();
  try {
    await model.registerBirth({
      firstName,
      otherName,
      dob,
      placeOfBirth,
      gender,
      address,
      localGovt,
      fatherName,
      fatherEmail,
      fatherState,
      fatherNationality,
      motherName,
      motherEmail,
      motherState,
      motherNationality
    });
  } catch (err) {
    console.error(err);
    res.status(500).render('birthreg', { message: 'Could not complete registration.' });
    return;
  }

  res.status(200).render('birthreg', { message: 'Registration Successful.' });
  wss.emit('birth');
}
