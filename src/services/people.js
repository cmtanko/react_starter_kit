import db from '../db';

export async function fetchAllPeople() {
  let result = await db.allDocs({ include_docs: true });
  return result.rows.map(record => record.doc);
}
