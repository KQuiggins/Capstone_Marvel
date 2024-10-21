'use server'

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });
}

export async function submitContactForm(data) {
  const db = await openDb();
  await db.run('CREATE TABLE IF NOT EXISTS contact_form (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT)');
  const { name, email, message } = data;
  await db.run('INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
  return { status: 'success' };
}
