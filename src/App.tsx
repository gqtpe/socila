import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}


export default App;
