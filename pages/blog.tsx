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
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();

                console.log('Fetched data:', result); // Log the fetched data
                console.log('Type of fetched data:', typeof result); // Log the type of fetched data
                console.log('Fetched data keys:', Object.keys(result)); // Log the keys of the fetched data object

                // Type guard to check if the data has the expected structure
                if (result && Array.isArray(result.blogs)) {
                    setData(result.blogs as BlogPost[]); // Access the array under the 'blogs' key
                } else {
                    console.error('Fetched data is not an array:', result);
                    throw new Error('Fetched data format is invalid');
                }
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to fetch blogs. Please try again later.');
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
                        <p>{new Date(post.blogdate).toLocaleDateString()}</p> {/* Format date */}
                        <p>{post.blogbody}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
