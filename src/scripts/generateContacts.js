import fs from 'fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContacts.js';

const generateContacts = async (number) => {
  try {
    const dbPath = path.join(PATH_DB, 'db.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];

    await fs.writeFile(
      dbPath,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );

    console.log(`${number} new contacts have been added successfully.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);
