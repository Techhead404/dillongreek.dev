import { Roboto_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { getBlogs } from "./api/blog-api"; // Import your function to fetch blogs

export default function Blog() {
    const [data, setData] = useState<any[]>([]);  // State to store the blogs
    const [loading, setLoading] = useState(true);  // State to handle loading state
    const [error, setError] = useState<string | null>(null);  // State for error handling

    useEffect(() => {
        // Fetch blogs when the component mounts
        async function fetchBlogs() {
            try {
                const result = await getBlogs();
                if (Array.isArray(result)) {
                    setData(result);  // Update state with the fetched data
                } else {
                    setData([]); // If result is not an array, set data to empty array
                }
            } catch (err) {
                setError('Error fetching blogs');  // Set error state if the fetch fails
            } finally {
                setLoading(false);  // Stop loading when done
            }
        }

        fetchBlogs();
    }, []);  // Empty dependency array means this effect runs only once when the component mounts

    // Render loading or error message if applicable
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul>
            {data.map((post) => (
                <li key={post.blogname}>
                    <h2>{post.blogdate}</h2>
                    <p>{post.blogbody}</p>
                </li>
            ))}
        </ul>
    );
}