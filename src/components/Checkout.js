import { useContext } from "react";
import styled from "styled-components";

import TokenContext from "../contexts/TokenContext";


function Checkout () {
    const { token } = useContext(TokenContext);


    return (
        <Container>
            
        </Container>
    )
}

export default Checkout;

const Container = styled.main`
`;