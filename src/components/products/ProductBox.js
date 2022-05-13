import styled from "styled-components";

function ProductBox (params) {
    const { name, id, image, price } = params.product;

    return (
        <Box>
            <Img src={image} />
            <Info>
                {name},
                {price}
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
    height: 170px;
    border: 2px solid gray;
    border-radius: 5px;
`;

const Img = styled.img`
    width: 100px;
`;

const Info = styled.div`
`;