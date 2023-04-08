
import React, {Suspense, useContext, useEffect} from 'react';
import './App.css';
import {useUserInfo} from "./lib/hooks/useUserInfo";
import {Route, Routes} from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"))
const About = React.lazy(() => import("./components/About"))
const AboutMe = React.lazy(() => import("./components/AboutMe"))
const Posts = React.lazy(() => import("./components/posts/Posts"))
const Topbar = React.lazy(() => import("./components/topbar/Topbar"))
const NotFound = React.lazy(() => import("./components/NotFound"))
const AboutProject = React.lazy(() => import("./components/AboutProject"))
const Post = React.lazy(() => import("./components/posts/Post"))

function App() {
    const userInfo = useUserInfo();

    return <>
            <Suspense fallback={'Loading...'}>
                <Topbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path={'/posts/:postId'} element={<Post />} />
                    <Route path={'/posts'} element={<Posts />} />
                    <Route path={'/about'} element={<About />} >
                        <Route path={'/about/me'} element={<AboutMe />} />
                        <Route path={'/about/project'} element={<AboutProject />} />
                    </Route>
                    <Route path={'*'} element={<NotFound />}  />
                </Routes>
            </Suspense>
        </>
}

export default App;
