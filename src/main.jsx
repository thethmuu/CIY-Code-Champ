import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

export function Reddit() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/r/showerthoughts.json")
            .then((res) => res.json())
            .then((data) => {
                const newPosts = data.data.children.map((obj) => obj.data);
                setPosts(newPosts);
            });
    }, []);

    return (
        <div>
            <h1>/r/showerthoughts</h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<Reddit />);
