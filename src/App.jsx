// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from "./Menu.jsx";
import Posts from "./pages/Posts.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const App = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/create" element={<CreatePost />} />

            </Routes>
        </Router>
    );
};

export default App;
