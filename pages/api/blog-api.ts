import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';


//http://localhost:3000/api/blog-api?blogname=testingname&blogcategory=testingcategory&blogbody=testingbody&blogdate=11/5/24


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    )  {
        console.log('Postgres URL:', process.env.POSTGRES_URL);
    //     try{
    // const blogname = req.query.blogname as string;
    // const blogcategory = req.query.blogcategory as string;
    // const blogbody = req.query.blogbody as string;
    // const blogdate = req.query.blogdate as string;

    // if (!blogname || !blogcategory || !blogbody || !blogdate) throw new Error('Missing fields');

    // await sql`INSERT INTO blogs (blogname, blogcategory, blogbody, blogdate) VALUES (${blogname}, ${blogcategory}, ${blogbody}, ${blogdate})`;
    // }catch (error) {
    //     return res.status(500).json({ error });
    // }

    const blogs = await getBlogs();

    return res.status(200).json({ blogs });
}

// Fetch all blogs from the database
export async function getBlogs() {
    try {
        const result = await sql`SELECT * FROM blogs`;
        
        // Extract only the rows (the blog data) from the query result
        return result.rows; // This will return only the blog data, not the metadata
    } catch (error) {
        console.error('Error fetching blogs:', error); // Log error during fetch
        throw new Error('Error fetching blogs'); // Throw an error to propagate it
    }
}


export async function createBlog(blogname: string, blogcategory: string, blogbody: string, blogdate: string) {
    return await sql`INSERT INTO blogs (blogname, blogcategory, blogbody, blogdate) VALUES (${blogname}, ${blogcategory}, ${blogbody}, ${blogdate})`;
}