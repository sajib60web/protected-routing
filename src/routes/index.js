import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import AddBlog from '../pages/AddBlog';
import About from '../pages/About';
import Error from '../pages/Error';
import Protected from './Protected';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Navbar />
            {isLoggedIn ? <button onClick={() => { setIsLoggedIn(!isLoggedIn) }}>log Out</button> : <button onClick={() => { setIsLoggedIn(!isLoggedIn) }}>log In</button>}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/add-blog" element={<Protected isLoggedIn={isLoggedIn}> <AddBlog /> </Protected>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index