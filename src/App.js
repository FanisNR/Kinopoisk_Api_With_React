import './App.css';
import Playbill from "./components/FilmList/Playbill";
import Topfilms from "./components/TopFilms/Topfilms";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import IndexPage from './components/IndexPage/IndexPage';
import {Single} from './components/Single/Single';
import React from 'react';
import {Routes, Route, Outlet} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path={"films"} element={<FilmsLayout/>}>
                    <Route index element={<Playbill/>}/>
                    <Route path={":filmId"} element={<Single/>}/>
                </Route>
                <Route path={"top_films"} element={<FilmsLayout/>}>
                    <Route index element={<Topfilms/>}/>
                    <Route path={":filmId"} element={<Single/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

function FilmsLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

function Layout() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
  
