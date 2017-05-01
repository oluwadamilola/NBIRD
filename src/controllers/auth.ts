import * as express from 'express';
import User from '../models/user';

export function getLoginForm(req: express.Request, res: express.Response) {
  res.render('login');
}

export async function login(req: express.Request, res: express.Response) {
  const { username, password } = req.body;

  if (!username || !password || password.length < 5) {
    res.status(400).render('login', { message: 'All fields are required' });
    return;
  }

  try {
    const user = new User();
    const userDetails = await user.getUserByUsername(username);

    const validPassword = await user.validatePassword(password, userDetails.passHash);

    if (!validPassword) {
      res.status(400).render('login', { message: 'Invalid Credentials' });
      return;
    }
  } catch (err) {
    console.error(err);
    res.status(400).render('login', { message: 'Invalid Credentials' });
    return;
  }

  req.session.username = username;
  res.redirect('/birth');
}
