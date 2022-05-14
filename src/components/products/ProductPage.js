import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage () {
    const { productID } = useParams();
    const [infos, setInfos] = useState({});

    useEffect(async () => {
        try {
            const res = await axios.get(`http://localhost:5000/products/${productID}`);
            setInfos(res.data);
        } catch (error) {
            alert("deu ruim papa");
        }
    }, [])

    return(
        <Container>
            <ImgAndInfos>
                <Img src={infos.image}/>
                <Infos>
                    {infos.name}, {infos.price}
                </Infos>
            </ImgAndInfos>
            <Description></Description>
        </Container>
    )
}

export default ProductPage;

const Container = styled.main`
`;

const ImgAndInfos = styled.section`
`;

const Img = styled.img`
    width: 300px;
`;

const Infos = styled.div`
`;

const Description = styled.div`
`;