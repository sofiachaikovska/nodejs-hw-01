import fs from 'fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContacts.js';

export const addOneContact = async () => {
  try {
    const dbPath = path.join(PATH_DB, 'db.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(dbPath, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('One new contact has been added successfully.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

await addOneContact();
