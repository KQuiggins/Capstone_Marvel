'use server'

import { databases } from '../appwriteConfig';

/**
 * Submits the contact form data to the Appwrite database.
 * @param {Object} data - The form data.
 * @param {string} data.name - The name of the user.
 * @param {string} data.email - The email of the user.
 * @param {string} data.message - The message from the user.
 * @returns {Promise<Object>} A promise that resolves to an object indicating the status.
 */

export async function submitContactForm(data) {
  try {
    // Destructure the form data
    const { name, email, message } = data;

    // Insert the data into the Appwrite database
    await databases.createDocument(
      '[DATABASE_ID]', // Replace with your Appwrite database ID
      '[COLLECTION_ID]', // Replace with your Appwrite collection ID
      'unique()', // Document ID, use 'unique()' to auto-generate
      { name, email, message }
    );

    return { status: 'success' };
  } catch (error) {
    console.error('Appwrite Database Error:', error);
    return { status: 'error', message: error.message };
  }
}
