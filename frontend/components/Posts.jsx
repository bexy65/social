import { useEffect, useState } from "react";
import { useSendRequest } from "../hooks/SendRequestHook";
import Loading from "./Loading";


function Posts() {
    const [posts, setPosts] = useState([]);
    const { sendRequest, loading } = useSendRequest();
    useEffect(() => {
        const getPosts = async () => {
            const data = await sendRequest("https://dummyjson.com/posts");
            setPosts(data.posts);
        };

        getPosts();
    }, []);

    return (
        <>
            <main className="h-full flex-1 overflow-y-auto px-2">
                <div className=" text-start py-2 mx-auto max-w-2xl border-b">
                    <div className="m-0 h-full flex-col">
                        <input type="text" placeholder="What you think?" className="border w-full" />
                        <div className="w-full text-end my-2">
                            <button className="border w-full md:w-1/2 h-12">Share</button>
                        </div>
                    </div>
                </div>
                <div className="text-start mx-auto max-w-2xl">
                    {loading && <Loading />}

                    {!loading && posts.map((post) => (
                        <div className="mb-2 border-b py-2" key={post.id}>
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