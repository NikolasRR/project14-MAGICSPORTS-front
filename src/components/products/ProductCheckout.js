import styled from "styled-components";

function ProductCheckout (params) {
    const {name, price, image} = params.product;

    return (
        <Container>
            <Img src={image}/>
            <Div>
            <Name>{name}</Name>
            <Price>R${price}</Price>
            </Div>
        </Container>
    )
}

export default ProductCheckout;

const Container = styled.article`
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    flex-shrink: 0;
    resize: none;
    margin-right: 5px;
    box-sizing: border-box;
    border: 1px solid #542084;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Name = styled.h6`
    font-family: play;
    font-size: 10px;
    width: 50px;
`;

const Price = styled.p`
    font-family: play;
    font-size: 10px;
    width: 50px;
`;