import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {ReactComponent as SearchSvg} from '../assets/img/ion-icons/search-outline.svg';
import logo from "../assets/img/Magicsportsmini.png"
function Header () {
    const navigate = useNavigate();

    return (
        <Container>
            <Top>
            <Buttons>
                <Button onClick={() => navigate("/sign-in")}>Log in</Button>
                <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
            </Buttons>
            </Top>
            <Content>
            <Img src={logo} alt="logo"/>
            <SearchDiv>
            <SearchSvg/>
            <Search placeholder="Pesquise aqui"/>
            </SearchDiv>
            <ButtonsProfile>
        <Shopping/>
            </ButtonsProfile>
            </Content>
        </Container>
    )
}

export default Header;

const Img = styled.img`
width:250px;
height:48px;
`
const Container = styled.header`
    height: 100px;
    width: 100%;
    background-color: #33164f;
    position:relative;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
`;
const Buttons = styled.div`
`;

const Button = styled.button`
width:60px;
height:30px;
background-color:#ffff;
border:none;
border-radius: 5px;
margin-left: 10px;
`;
const Top = styled.div`
background-color: #fdb927;
width:100%;
height:40px;
display:flex;
justify-content:flex-end;
align-items:center;
padding: 0 30px;
box-shadow: 0 2px black;
`
const Content = styled.div`
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Shopping = styled.button`
    width:50px;
    height:10px;
`
const ButtonsProfile = styled.div`
`
const Search = styled.input`
    width:300px;
    height:30px;
    color:black;
    border-radius: 4px;
    padding-left: 36px;
`
const SearchDiv = styled.div`
    position: relative;
    svg {
        position:absolute;
        top:5px;
        left:5px;
        width:20px;
        color:silver;
    }
`