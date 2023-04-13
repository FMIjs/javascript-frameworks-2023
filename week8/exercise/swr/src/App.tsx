import React, {Suspense} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/Home";
import Post from "./components/posts/Post";
import Posts from "./components/posts/Posts";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import AboutProject from "./components/AboutProject";
import NotFound from "./components/NotFound";
import {preload} from "swr";
import axios from "axios";

// const Home = React.lazy(() => import("./components/Home"))
// const About = React.lazy(() => import("./components/About"))
// const AboutMe = React.lazy(() => import("./components/AboutMe"))
// const Posts = React.lazy(() => import("./components/posts/Posts"))
// const Topbar = React.lazy(() => import("./components/topbar/Topbar"))
// const NotFound = React.lazy(() => import("./components/NotFound"))
// const AboutProject = React.lazy(() => import("./components/AboutProject"))
// const Post = React.lazy(() => import("./components/posts/Post"))

const fetcher = (...args: any) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const url = baseUrl + args[0];

    console.log('About to fetch ' + url);
    return axios.get(url).then(res => res.data);
}

function App() {
    preload('/posts', fetcher);


    return <Suspense fallback={<h1>Loading...</h1>}>
        <Topbar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'/posts/:postId'} element={<Post/>}/>
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/about'} element={<About/>}>
                <Route path={'/about/me'} element={<AboutMe/>}/>
                <Route path={'/about/project'} element={<AboutProject/>}/>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    </Suspense>
}

export default App;
