import * as bcrypt from 'bcrypt';
import knex from '../db';

export default class User {
  static tableName = 'users';

  async getUserByUsername(username: string): Promise<Readonly<UserDetails>> {
    if (!username) {
      throw new Error("A user ID was not supplied.");
    }

    const query = knex(User.tableName)
      .where({ username })

    const [row] = await query;

    if (!row) {
      throw new Error('User not found');
    }

    return row;
  }

  async validatePassword(passphrase: string, hash: string) {
    return await bcrypt.compare(passphrase, hash);
  }
}

interface UserDetails {
  created_at: number;
  updated_at: number;
  id: number;
  email: string;
  username: string;
  passHash: string;
}
