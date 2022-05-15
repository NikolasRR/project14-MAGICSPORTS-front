import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import ProductBox from "./products/ProductBox.js";
import PageNumber from "./PageNumber.js";
import Header from "./Header";

function Home() {
    const [last, setLast] = useState(0);
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState([]);
    const current = Math.ceil((last + 20) / 20);

    useEffect(async () => {
        try {
            const res = await axios.get(`https://magic-sports.herokuapp.com/products?limit=20&last=${last}`);
            setProducts(res.data.page);
            setPages(res.data.pages);
        } catch (error) {
            alert("deu ruim papa");
        }
    }, [last]);

    const previousPageIcon = last !== 0 && (<PreviousPage onClick={() => setLast(last - 20)}/>);
    const nextPageIcon = (last + 20) / 20 !== pages.length && (<NextPage onClick={() => setLast(last + 20)}/>);
    
    return (
        <>
            <Header />
            <Container>
                {products?.map(product => <ProductBox key={product.id} product={product} />)}
            </Container>
            <PageNavigation>
                {previousPageIcon}
                {/* {pages.map(page => <PageNumber key={page} page={page} current={current}/>)} */}
                {nextPageIcon}
            </PageNavigation>
        </>

    )
}

export default Home;

const Container = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px auto 0 auto;
    width: 375px;
    @media (min-width: 650px) {
        width: 650px;
    }
    @media (min-width: 1000px) {
        width: 1000px;
    }
`;

const PageNavigation = styled.div`
    margin: 30px auto 0 auto;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PreviousPage = styled(FaArrowCircleLeft)`
    font-size: 35px;
    margin-right: 2px;
`;

const NextPage = styled(FaArrowCircleRight)`
    font-size: 35px;
    margin-left: 2px;
`;
