import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ProductBox (params) {
    const { name, id, image, price } = params.product;
    const navigate = useNavigate();

    return (
        <Box onClick={() => navigate(`/product/${id}`)}>
            <Img src={image} />
            <Info>
                <Name>{name}</Name>
                <Price>R${price}</Price>
                
            </Info>
        </Box>
    )
}

export default ProductBox;

const Box = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 162.5px;
    height: 220px;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 0 15px 10px 0;
    &:nth-child(even) { margin-right: 0; }
    &:hover { 
        cursor: pointer;
        border: 1px solid #fdb927;
    }
    @media (min-width: 650px) {
        &:nth-child(even) { margin: 0 15px 10px 0; }
        &:nth-child(3n) { margin-right: 0; }
        
    }
    @media (min-width: 1000px) {
        &:nth-child(even) { margin: 0 15px 10px 0; }
        &:nth-child(3n) { margin: 0 15px 10px 0; }
        &:nth-child(5n) { margin-right: 0; }
    }
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 10px;
    object-fit: contain;
`;

const Info = styled.div`
    width: 142.5px;
    height: 80px;
    margin: 20px 0 0 10px;
`;

const Name = styled.p`
    font-size: 14px;
    font-family: 'Josefin Sans', sans-serif;
    color: #542084;
    font-weight: 700;
    height: 40px;
    margin-bottom: 10px;
`;

const Price = styled.p`
    font-size: 14px;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    color: #000000;
`;