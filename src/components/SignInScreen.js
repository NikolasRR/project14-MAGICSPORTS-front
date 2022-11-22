import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import Logo from "../assets/img/MagicsportsLogo.png";
import HTTP from "./../assets/config/http.js";

import TokenContext from "../contexts/TokenContext";

function SignInScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { setToken } = useContext(TokenContext);

  const LogIn = async function (ev) {
    ev.preventDefault();
    //FIXME trocar o link do post antes do commit
    try {
      await axios
        .post(`${HTTP}sign-in`, {
          email: email,
          password: password,
        })
        .then((res) => {
          localStorage.setItem("userToken", JSON.stringify(res.data));
          setToken(res.data);
          navigate("/");
        });
    } catch (error) {
      if (error.response.status === 404) {
        alert("E-mail não cadastrado");
        return;
      }
      if (error.response.status === 401) {
        alert("Senha incorreta");
        return;
      }
      if (error.response.status === 400) {
        alert("Verifique se escreveu os dados corretamente");
        return;
      }
      alert("Algo deu errado, tente novamente mais tarde");
    }
  };

  return (
    <Container>
      <img src={Logo} alt="logo magic sports" />
      <Form onSubmit={(ev) => LogIn(ev)}>
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          onChange={(ev) => setEmail(ev.target.value)}
        ></Input>
        <Input
          placeholder="Senha"
          value={password}
          type="password"
          onChange={(ev) => setpassword(ev.target.value)}
        ></Input>
        <Button type="submit">Entrar</Button>
      </Form>
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}

export default SignInScreen;

const Container = styled.div`
  box-sizing: border-box;
  background-color: #33164f;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  img {
    width: 300px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 360px;
`;

const Input = styled.input`
  padding-left: 15px;
  font-family: Play;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 13px;
  border: 2x solid;
  border-color: #fdb927;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 23px;
`;

const Button = styled.button`
  width: 300px;
  height: 46px;
  border-radius: 5px;
  background-color: #fdb927;
  border: none;
  margin-bottom: 36px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #ffff;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  color: #ffff;
  font-family: Play;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 50px;
`;
