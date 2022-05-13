import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductBox from "./products/ProductBox";
// import Header from "./Header";

function Home() {
    const [last, setLast] = useState(0);
    const [products, setProducts] = useState([]);


    useEffect(async () => {
        try {
            const res = await axios.get(`http://localhost:5000/products?limit=10&last=${last}`);
            setProducts(res.data);
        } catch (error) {
            alert("deu ruim papa");
        }
    }, []);

    return (
        <>
            {/* <Header /> */}
            <Container>
                {products.map(product => <ProductBox key={product.id} product={product} />)}
            </Container>
        </>

    )
}

export default Home;

const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
`;