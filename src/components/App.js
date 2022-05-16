import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import TokenContext from "../contexts/TokenContext";
import CartContext from "../contexts/CartContext";

import Home from "./Home";
import SignInScreen from "./SignInScreen";
import ProductPage from "./products/ProductPage";
import SignUpScreen from "./SignUpScreen";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {
    const [token, setToken] = useState(null);
    const [shoppingCart, setShoppingcart] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("userToken") !== null) {
            setToken(JSON.parse(localStorage.getItem("userToken")));
        }
    }, []);

    return (
        <CartContext.Provider value={{ shoppingCart, setShoppingcart }}>
            <TokenContext.Provider value={{ token, setToken }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sign-in" element={<SignInScreen />} />
                        <Route path="/sign-up" element={<SignUpScreen />} />
                        <Route path="/product/:productID" element={<ProductPage />} />

                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        </CartContext.Provider>
    )
}

export default App;