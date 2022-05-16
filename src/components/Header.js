import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/* import { ReactComponent as SearchSvg } from "../assets/img/ion-icons/search-outline.svg"; */
import { ReactComponent as ShoppingCartIcon } from "../assets/img/ion-icons/cart-outline.svg";
import { ReactComponent as UserIcon } from "../assets/img/ion-icons/person-circle-outline.svg";
import { ReactComponent as PointIcon } from "../assets/img/ion-icons/caret-up-outline.svg";
import { ReactComponent as DeleteIcon } from "../assets/img/ion-icons/close.svg";

import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    async function getPerfil() {
      const token = JSON.parse(localStorage.getItem("userToken"));
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        await axios
          .get("https://magic-sports.herokuapp.com/user", config)
          .then((res) => {
            setName(res.data);
          });
      } catch (e) {
        console.log(e);
      }
    }
    getPerfil();
  }, []);

  async function getShoppingCart() {
    setShowShoppingCart(() => (showShoppingCart ? false : true));
    const token = JSON.parse(localStorage.getItem("userToken"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios
        .get("https://magic-sports.herokuapp.com/shopping-cart", config)
        .then((res) => {
          const sCarts = [...res.data];
          setShoppingCart(sCarts);
        });
    } catch (e) {
      console.log(e);
    }
  }
  async function ShoppingCartDelete(id) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios
        .delete(`https://magic-sports.herokuapp.com/shopping-cart?id=${id}`,config)
        .then((res) => {
          getShoppingCart();
        });
    } catch (e) {
      console.log(e);
    }
  }
  function logout() {
    localStorage.removeItem("userToken");
    window.location.reload();
  }
  return (
    <Container>
      <Top>
        <Buttons>
          {name===""?(
            <>
              <Button onClick={() => navigate("/sign-in")}>Log in</Button>
              <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
            </>
             ):(
              <Button onClick={logout}>Logout</Button>
             )}
        </Buttons>
      </Top>
      <Content>
        <LogoDiv>
          <h1>MAGICSPORTS</h1>
          <h2>apenas para os bruxo do esporte</h2>
        </LogoDiv>
       {/*  <SearchDiv>
          <SearchSvg />
          <Search placeholder="...o que você procura?" />
        </SearchDiv> */}
        <ButtonsProfile>
          <UserIcon />
          <NameUser>Olá, {name!==""?name:"Anônimo"}...</NameUser>
          <DivShopping onClick={getShoppingCart}>
            <ShoppingCartIcon />
            <PointIcon display={showShoppingCart ? "initial" : "none"} />
            <ShowShoppingCartDiv
              opacity={showShoppingCart ? "1" : 0}
              width={showShoppingCart ? "300px" : 0}
              height={showShoppingCart ? "400px" : 0}
            >
              <ShoppingCartMain>
                {shoppingCart === [] ? (
                  <article>
                    <h3>Ainda não há nada aqui...</h3>
                  </article>
                ) : (
                  shoppingCart.map((cart) => {
                    return (
                      <article key={cart.id}>
                        <div className="delete" onClick={()=> ShoppingCartDelete(cart.id)}>
                          <DeleteIcon />
                        </div>
                        <img src={cart.image} alt={cart.name}></img>
                        <div className="details">
                          <h3>{cart.name}</h3>
                          <h4>{cart.price}</h4>
                        </div>
                      </article>
                    );
                  })
                )}
              </ShoppingCartMain>
            </ShowShoppingCartDiv>
          </DivShopping>
        </ButtonsProfile>
      </Content>
    </Container>
  );
}

export default Header;

// Área do carrinho
const ShowShoppingCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  opacity: ${(props) => props.opacity};
  overflow-x: hidden;
  position: absolute;
  top: 50px;
  right: 8px;
  background-color: #f0f0f0;
  box-shadow: 2px 2px 3px #363535;
  border-radius: 5px;
  padding-top: 10px;
  transition: height 300ms ease-out;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: 1;
  article {
    position: relative;
    background-color: #ffff;
    padding: 5px 10px;
    margin: 5px;
    border: 2px solid;
    border-color: #fae6b9;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 86px;
    width: 264px;
    box-shadow: 1px 1px 3px silver;
    img {
      height: 70px;
      border: 2px solid;
      border-color: #fae6b9;
      border-radius: 5px;
    }
    h3 {
      color: black;
    }
    h4 {
      color: green;
    }
    .delete {
      position: absolute;
      top: 7px;
      right: 7px;
      svg {
        width: 20px;
        fill: red;
      }
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 70px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const DivShopping = styled.div`
  position: relative;
  .box-point {
    display: ${(props) => props.display};
    position: absolute;
    width: 25px;
    top: 35px;
    right: 5px;
    fill: #f0f0f0;
    z-index: 1;
  }
`;

const ShoppingCartMain = styled.main``;

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
