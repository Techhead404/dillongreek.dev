import { NextApiRequest, NextApiResponse } from 'next';
import { db, VercelPoolClient } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let client: VercelPoolClient | null = null;

    try {
        client = await db.connect();
        const { blogname } = req.query;

        let result;

        if (blogname) {
            // Fetch specific blog post by blogname
            result = await client.query('SELECT * FROM blogs WHERE blogname = $1', [blogname]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Blog post not found' });
            }
            const blogPost = {
                blogname: result.rows[0].blogname,
                blogdate: result.rows[0].blogdate,
                blogbody: result.rows[0].blogbody,
                blogcategory: result.rows[0].blogcategory,
                thumb: result.rows[0].thumb,
                blurb: result.rows[0].blurb,
            };
            return res.status(200).json(blogPost);
        } else {
            // Fetch all blog posts
            result = await client.query('SELECT * FROM blogs');
            const blogs = result.rows.map((row) => ({
                blogname: row.blogname,
                blogdate: row.blogdate,
                blogbody: row.blogbody,
                blogcategory: row.blogcategory,
                thumb: row.thumb,
                blurb: row.blurb,
            }));
            return res.status(200).json({ blogs });
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return res.status(500).json({ error: 'Error fetching blog posts' });
    } finally {
        if (client) {
            client.release();
        }
    }
}