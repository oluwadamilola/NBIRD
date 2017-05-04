import * as express from 'express';
import Registration from '../models/registration';

export async function getReport(req: express.Request, res: express.Response) {
  try {
    const model = new Registration();
    const { birthCount, deathCount } = await model.getReport();
    res.render('reports', { birthCount, deathCount });
  } catch(err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
}
