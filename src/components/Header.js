import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header () {
    const navigate = useNavigate();

    return (
        <Container>
            <Store>MAGIC sports</Store>
            <Buttons>
                <Button onClick={() => navigate("/sign-in")}>Log in</Button>
                <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
            </Buttons>
        </Container>
    )
}

export default Header;

const Container = styled.header`
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #FDBA22;
    display: flex;
`;

const Store = styled.h1`
`;

const Buttons = styled.div`
`;

const Button = styled.button`
`;