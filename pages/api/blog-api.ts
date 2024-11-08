import { NextApiResponse, NextApiRequest } from 'next';
import { db } from '@vercel/postgres';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    let client;
    try {
        client = await db.connect();

        if (_req.method === 'GET') {
        const result = await client.query('SELECT * FROM blogs');
        
        // Transform the result into a key-value format
        const blogs = result.rows.map((row) => ({
            blogname: row.blogname,
            blogdate: row.blogdate,
            blogbody: row.blogbody,
        }));
        return res.status(200).json({ blogs });
    } if (_req.method === 'POST') {
        const blogname = _req.body.blogname;
        const result = await client.query('SELECT {blogname} FROM blogs WHERE blogname = $1', [blogname]);
        const blog = result.rows[0];
        return res.status(200).json({ blog });
        }

    } catch (error) {
        console.error('Error fetching blogs:', error);
        return res.status(500).json({ error: 'Error fetching blogs' });
    } finally {
        if (client) {
            client.release();
        }
    }
}