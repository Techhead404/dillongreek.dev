import { useEffect, useState } from "react";

export default function Blog() {
    interface BlogPost {
        blogname: string;
        blogdate: string;
        blogbody: string;
    }

    const [data, setData] = useState<BlogPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch blogs when the component mounts
        async function fetchBlogs() {
            try {
                const response = await fetch('/api/blog-api');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result as BlogPost[]);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to fetch blogs');
            }
        }

        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {data.map((post) => (
                    <li key={post.blogname}>
                        <h2>{post.blogname}</h2>
                        <p>{post.blogdate}</p>
                        <p>{post.blogbody}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

