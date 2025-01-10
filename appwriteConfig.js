import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your Appwrite endpoint
    .setProject('[PROJECT_ID]'); // Your project ID

const databases = new Databases(client);

export { databases };
