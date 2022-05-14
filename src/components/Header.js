import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchSvg } from "../assets/img/ion-icons/search-outline.svg";
import { ReactComponent as ShoppingCartIcon } from "../assets/img/ion-icons/cart-outline.svg";
import { ReactComponent as UserIcon } from "../assets/img/ion-icons/person-circle-outline.svg";
import {ReactComponent as PointIcon} from "../assets/img/ion-icons/caret-up-outline.svg"
import { useState } from "react";
function Header() {
  const navigate = useNavigate();
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  function ShowShoppingCart() {
    setShowShoppingCart(true);
  }

  return (
    <Container>
      <Top>
        <Buttons>
          <Button onClick={() => navigate("/sign-in")}>Log in</Button>
          <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
        </Buttons>
      </Top>
      <Content>
        <LogoDiv>
          <h1>MAGICSPORTS</h1>
          <h2>apenas para os bruxo do esporte</h2>
        </LogoDiv>
        <SearchDiv>
          <SearchSvg />
          <Search placeholder="...o que você procura?" />
        </SearchDiv>
        <ButtonsProfile>
          <UserIcon />
          <NameUser>Olá, Anonimo...</NameUser>
          <DivShopping onClick={ShowShoppingCart}>
            <PointIcon/>
            <ShoppingCartIcon />
            <ShoppingCart/>
          </DivShopping>
        </ButtonsProfile>
      </Content>
    </Container>
  );
}

export default Header;


// Área do carrinho
const DivShopping = styled.div`
  position:relative;
  .box-point {
    position: absolute;
    top:25px;
    right:-3px;
    color:#ffff;
  }
`

const ShoppingCart = styled.div`
  transition: width 600ms ease-out, height 600ms ease-out;
  position:absolute;
  top:45px;
  right:0px;
  width:300px;
  height:400px;
  border-radius: 5px;
  background-color:#ffff;
  box-shadow: 2px 2px 5px black;
  z-index:1;
`

// Nome do usuario logado
const NameUser = styled.h3``;

//Logo
const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;

  h1 {
    font-family: Koulen;
    font-size: 32px;
    color: #fdb927;
  }
  h2 {
    font-family: Play;
    font-size: 10px;
    font-weight: bold;
    color: #ffff;
  }
`;

// Container que guarda todo o header
const Container = styled.header`
  height: 100px;
  width: 100%;
  background-color: #33164f;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 5px black;
`;

// Botões login logout
const Buttons = styled.div``;

const Button = styled.button`
  width: 70px;
  height: 30px;
  font-family: Play;
  font-size: 15px;
  font-weight: bold;
  color: #33164f;
  background-color: inherit;
  border: none;
  border-radius: 5px;
`;

// Faixa amarela com os botões login logout
const Top = styled.div`
  background-color: #fdb927;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
`;

// Parte de baixo do header, com logo, pesquisar e botoes de perfil.
const Content = styled.div`
  padding: 0 30px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Botões de usuário, shopping cart, silhueta svg com nome.
const ButtonsProfile = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  font-family: Play;
  color: #ffff;
  svg {
    width: 40px;
    fill: #ffff;
    color: #ffff;
  }
`;

// Input de pesquisa de produtos
const Search = styled.input`
  width: 450px;
  height: 40px;
  color: black;
  border-radius: 4px;
  padding-left: 40px;
  font-family: Play;
  font-size: 15px;
  border: none;
  &:focus {
    outline: 2px solid;
    outline-color: silver;
  }
`;
const SearchDiv = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 7px;
    left: 7px;
    width: 25px;
    color: silver;
  }
`;

// Fim -------