import * as express from 'express';
import Registration from '../models/registration';
import { wss } from '../index';

export function getDeathForm(req: express.Request, res: express.Response) {
  res.render('deathreg');
}

export async function registerDeath(req: express.Request, res: express.Response) {
  const {
    firstName,
    otherName,
    address,
    dob,
    gender,
    maritalStatus,
    placeOfDeath,
    hospitalNumber,
    localGovt,
    stateOfOrigin,
    causeOfDeath,
  } = req.body;

  // Todo: Do any form of Validation

  try {
    const model = new Registration();
    await model.registerDeath({
      firstName,
      otherName,
      address,
      dob,
      gender,
      maritalStatus,
      placeOfDeath,
      hospitalNumber,
      localGovt,
      stateOfOrigin,
      causeOfDeath,
    });
  } catch(err) {
    console.error(err);
    res.status(500).render('deathreg', { message: 'Could not complete registration.' });
    return;
  }

  res.status(200).render('deathreg', { message: 'Registration Successful.' });
  wss.emit('death');
}
