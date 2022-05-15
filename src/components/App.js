import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import TokenContext from "../contexts/TokenContext";

import Home from "./Home";
import SignInScreen from "./SignInScreen";
import ProductPage from "./products/ProductPage";
import SignUpScreen from "./SignUpScreen";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";
import Checkout from "./Checkout";

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("userToken") !== null) {
            setToken(JSON.parse(localStorage.getItem("userToken")));
        }
    }, []);

    // useEffect(() => {
    //     const everyFiveSeconds = 5000;
    //     if (token) {
    //         const attStatus = setInterval(() => {
    //             console.log("rodou uma vez")
    //             axios.post("https://mywalletproject13.herokuapp.com/status", {},
    //                 {
    //                     headers: { Authorization: `Bearer ${token}` }
    //                 })
    //                 .then()
    //                 .catch(error => {
    //                     clearInterval(attStatus);
    //                 });
    //         }, everyFiveSeconds);
    //     }
    // }, [token])

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignInScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                    <Route path="/product/:productID" element={<ProductPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

export default App;