// src/components/CreatePost.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://dummyjson.com/posts/add",{
            title: title,
            userId: "1"

        })
            .then((response)=>{
                navigate("/posts")
                console.log("Успешно добавлен")

            })
            .catch((error)=>{
                console.error(error)
            })

    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <br />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
