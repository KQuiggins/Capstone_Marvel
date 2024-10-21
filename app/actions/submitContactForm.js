'use server'

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function openDb () {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  })
}

export async function submitContactForm (data) {
  const db = await openDb()

  try {
    // Ensure the table exists
    await db.run(`
      CREATE TABLE IF NOT EXISTS contact_form (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL
      )
    `)

    // Destructure the form data
    const { name, email, message } = data

    // Insert the data into the database
    await db.run(
      'INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    )

    return { status: 'success' }
  } catch (error) {
    console.error('Database Error:', error)
    return { status: 'error', message: error.message }
  } finally {
    // Ensure the database connection is closed
    await db.close()
  }
}
