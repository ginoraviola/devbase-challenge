import './App.css';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import Person from "./views/Person";

function App() {
    return (
        <div className="App">
            <Header/>
            <section className="w-full max-w-screen max-h-screen p-6">
                <Routes>
                    <Route element={<Home />} path="/"/>
                    <Route element={<Person />} path="/person/:username"/>
                </Routes>
            </section>
        </div>
    );
}

export default App;
