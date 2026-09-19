import { useEffect, useState } from "react";


function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/posts");
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <main className="h-full flex-1 overflow-y-auto px-2 lg:px-0 pb-16">
                <div className=" text-start p-2">
                    <div className="m-0 border">what u think?</div>
                    <div className="border">
                        <p>button section</p>
                    </div>
                </div>
                <div className="text-start mx-auto max-w-2xl">
                    {posts.map((post) => (
                        <div className="mb-2 border py-2" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Posts;