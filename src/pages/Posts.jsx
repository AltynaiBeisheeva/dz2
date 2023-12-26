
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get("https://dummyjson.com/posts")
          .then((res)=>{

             const response = res.data.posts
               setPosts(response)
          })
    }, []);

    return (
        <div>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post)=>(
                    <div key ={post.id}>
                        <li>
                        <p>
                            {post.title}

                        </p>
                    </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
