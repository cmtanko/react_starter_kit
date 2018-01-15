import db from '../db';
import crypto from 'crypto';

export async function loadUsers() {
  let result = await db.allDocs({ include_docs: true });
  return result.rows.map(record => record.doc);
}

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

export function saveUser(user) {
  return db.put({
    _id: generateId(),
    user: user
  });
}
