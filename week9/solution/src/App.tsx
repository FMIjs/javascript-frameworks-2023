import React, {Suspense, useEffect, useState} from 'react';
import Topbar from "./components/Topbar";
import {Route, Routes} from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const Album = React.lazy(() => import("./components/Album"));
const Settings = React.lazy(() => import("./components/Settings"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {

    return <>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Topbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/album'} element={<Album/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Suspense>
    </>
}

export default App;
