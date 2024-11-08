import { NextApiResponse, NextApiRequest } from 'next';
import { db } from '@vercel/postgres';

export default async function handler( _req: NextApiRequest, res: NextApiResponse )  
{
    try {
        const client = await db.connect();
        //const result = await client.sql`SELECT * FROM blogs`;
        const result = await client.query('SELECT * FROM blogs');
        console.log('Result:', result);
        const blogs = Array.isArray(result) ? result : [];
        return res.status(200).json({ blogs });

    } catch (error) {
        console.error('Error fetching blogs:', error); // Log error during fetch
        throw new Error('Error fetching blogs'); // Throw an error to propagate it
    }
}
