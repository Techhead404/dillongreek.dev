import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Blog() {
    interface BlogPost {
        blogname: string;
        blogdate: string;
        blogbody: string;
    }

    const [data, setData] = useState<BlogPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await fetch('/api/blog-api');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();

                if (result && Array.isArray(result.blogs)) {
                    setData(result.blogs as BlogPost[]);
                } else {
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
        <div className="dark-theme">
            <h1>Blog</h1>
            {error && <p className="error">{error}</p>}
            <div className="blog-container">
                {data.map((post) => (
                    <Link key={post.blogname} href={`/blog/${post.blogname}`} passHref>
                        <div className="blog-card">
                            <h2>{post.blogname}</h2>
                            <p className="date">{new Date(post.blogdate).toLocaleDateString()}</p>
                            <p>{post.blogbody}</p>
                            <button className="read-more-button">Read More</button>
                        </div>
                    </Link>
                ))}
            </div>

            <style jsx>{`
                /* Dark Theme Styles */
                .dark-theme {
                    background-color: #121212;
                    color: #ffffff;
                    min-height: 100vh;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .error {
                    color: red;
                    text-align: center;
                }

                /* Blog Container */
                .blog-container {
                    display: grid;
                    gap: 20px;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    margin: 0 auto;
                    max-width: 1200px;
                }

                /* Blog Card */
                .blog-card {
                    background-color: #1e1e1e;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                    transition: transform 0.2s;
                    cursor: pointer;
                }
                .blog-card:hover {
                    transform: translateY(-5px);
                }
                .blog-card h2 {
                    margin: 0 0 10px;
                    font-size: 1.5em;
                }
                .blog-card .date {
                    font-size: 0.9em;
                    color: #a9a9a9;
                    margin-bottom: 15px;
                }
                .blog-card p {
                    font-size: 1em;
                    line-height: 1.5;
                }
                .read-more-button {
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    margin-top: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                .read-more-button:hover {
                    background-color: #005bb5;
                }
            `}</style>
         </div>
    );
}
