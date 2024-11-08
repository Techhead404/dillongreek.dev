import { NextApiResponse, NextApiRequest } from 'next';
import { db } from '@vercel/postgres';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    let client;
    try {
        client = await db.connect();
        const result = await client.query('SELECT * FROM blogs');

        const blogs = result.rows; // Ensure blogs is an array

        return res.status(200).json({ blogs });
    } catch (error) {
        console.error('Error fetching blogs:', error); // Log error during fetch
        return res.status(500).json({ error: 'Error fetching blogs' }); // Send a 500 error response
    } finally {
        if (client) {
            client.release(); // Release client connection
        }
    }
}