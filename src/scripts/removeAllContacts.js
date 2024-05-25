import fs from 'fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const dbPath = path.join(PATH_DB, 'db.json');
    await fs.writeFile(dbPath, JSON.stringify([], null, 2), 'utf-8');

    console.log('All contacts have been removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

await removeAllContacts();
