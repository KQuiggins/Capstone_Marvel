'use server';

import { neon } from '@neondatabase/serverless';

/**
 * Submits the contact form data to the database.
 * @param {Object} formData - The form data as a plain object.
 * @returns {Promise<Object>} A promise that resolves to an object indicating the status.
 */
export async function submitContactForm(formData) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const { name, email, message } = formData;

  try {
    await sql(
      'INSERT INTO "public"."contact" (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
    return { status: 'success' };
  } catch (error) {
    console.error('Database error:', error);
    return { status: 'error', error: 'Failed to save the contact form data.' };
  }
}
