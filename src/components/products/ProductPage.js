import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../Header";

function ProductPage() {
  const { productID } = useParams();
  const [infos, setInfos] = useState({});
  const navigate = useNavigate();

  async function postShoppingCart(id) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios
        .post(
          `https://magic-sports.herokuapp.com/shopping-cart?id=${id}`,
          {},
          config
        )
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(async () => {
    try {
      const res = await axios.get(
        `https://magic-sports.herokuapp.com/products/${productID}`
      );
      setInfos(res.data);
    } catch (error) {
      alert("deu ruim papa");
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Img src={infos.image} />
        <InfosAndActions>
          <Infos>
            <Name>{infos.name}</Name>
            <Price>R${infos.price}</Price>
          </Infos>
          <Actions>
            <BuyNow>Compre agora</BuyNow>
            <AddToCart onClick={() => postShoppingCart(infos.id)}>
              Adicionar ao carrinho
            </AddToCart>
          </Actions>
        </InfosAndActions>
        <Description>
          <H4>Descrição:</H4>
          <P>{infos.description}</P>
        </Description>
      </Container>
    </>
  );
}

export default ProductPage;

const Container = styled.main`
  margin-top: 100px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 375px;
  @media (min-width: 650px) {
    width: 650px;
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  @media (min-width: 650px) {
    width: 350px;
    height: 350px;
    margin-right: 30px;
  }
`;

const InfosAndActions = styled.section`
  width: 250px;
  @media (min-width: 650px) {
    width: 270px;
  }
`;

const Infos = styled.div``;

const Name = styled.p`
  font-family: Play;
  font-weight: 700;
  font-size: 30px;
  margin: 40px 0 20px 0;
  color: #33164f;
  @media (min-width: 650px) {
    font-size: 40px;
    margin: 0 0 30px 0;
  }
`;

const Price = styled.p`
  font-family: Koulen;
  font-size: 25px;
  color: #fdb927;
  @media (min-width: 650px) {
    font-size: 35px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (min-width: 650px) {
    margin-top: 40px;
  }
`;

const BuyNow = styled.button`
  width: 250px;
  height: 50px;
  font-family: Koulen;
  background-color: #fdb927;
  color: #33164f;
  margin-bottom: 5px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  @media (min-width: 650px) {
    font-size: 30px;
    width: 270px;
    height: 70px;
    margin-bottom: 15px;
  }
  &:hover {
    cursor: pointer;
    background-color: #33164f;
    color: #fdb927;
  }
`;

const AddToCart = styled.button`
  width: 250px;
  height: 50px;
  font-family: Koulen;
  background-color: #fdb927;
  color: #33164f;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  @media (min-width: 650px) {
    font-size: 30px;
    width: 270px;
    height: 70px;
  }
  &:hover {
    cursor: pointer;
    background-color: #33164f;
    color: #fdb927;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  width: 250px;
  font-family: Play;
  @media (min-width: 650px) {
    width: 650px;
    margin-top: 40px;
  }
`;

const H4 = styled.h4`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 22px;
`;

const P = styled.p`
  font-size: 20px;
`;
