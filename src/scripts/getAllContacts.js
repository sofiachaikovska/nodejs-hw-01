import fs from 'fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const dbPath = path.join(PATH_DB, 'db.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};

console.log(await getAllContacts());
