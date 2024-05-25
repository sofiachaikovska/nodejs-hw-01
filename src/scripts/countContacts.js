import fs from 'fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const dbPath = path.join(PATH_DB, 'db.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

console.log(await countContacts());
