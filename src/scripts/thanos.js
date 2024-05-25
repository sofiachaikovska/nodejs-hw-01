import fs from 'fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const dbPath = path.join(PATH_DB, 'db.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    const remainingContacts = contacts.filter(() => Math.random() >= 0.5);

    await fs.writeFile(
      dbPath,
      JSON.stringify(remainingContacts, null, 2),
      'utf-8',
    );

    console.log('Some contacts have been removed.');
  } catch (error) {
    console.error('Error during deletion:', error);
  }
};

await thanos();
