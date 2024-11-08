import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
    const router = useRouter();
    const { blogname } = router.query;

    interface BlogPost {
        blogname: string;
        blogdate: string;
        blogbody: string;
    }

    const [post, setPost] = useState<BlogPost | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (blogname) {
            // Fetch the specific blog post by blogname
            async function fetchBlogPost() {
                try {
                    const response = await fetch(`/api/blog-api?blogname=${blogname}`);
                    if (!response.ok) throw new Error('Failed to fetch blog post');

                    const result = await response.json();
                    if (result && result.blogname) {
                        setPost(result);
                    } else {
                        throw new Error('Blog post data format is incorrect');
                    }
                } catch (err) {
                    console.error('Error fetching blog post:', err);
                    setError('Failed to load blog post');
                }
            }

            fetchBlogPost();
        }
    }, [blogname]);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!post) return <p>Loading...</p>;

    return (
        <div className="dark-theme">
            <h1>{post.blogname}</h1>
            <p className="date">{new Date(post.blogdate).toLocaleDateString()}</p>
            <p>{post.blogbody}</p>

            <style jsx>{`
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
                .date {
                    text-align: center;
                    color: #a9a9a9;
                    margin-bottom: 20px;
                }
                p {
                    text-align: justify;
                }
            `}</style>
        </div>
    );
}
