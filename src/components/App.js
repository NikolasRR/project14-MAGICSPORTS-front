import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";
import Home from "./Home";

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;