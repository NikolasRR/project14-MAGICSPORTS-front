import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/MagicsportsLogo.png";
import { useState } from "react";
import axios from "axios";

function SignUpScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const SignIn = async function (ev) {
    ev.preventDefault();
    if (confirmPass !== password) {
      setPassword("");
      setConfirmPass("");
      alert("As senhas não conincidem!");
      return;
    }
    try {
      await axios
        .post("https://magic-sports.herokuapp.com/sign-up", {
          name,
          email,
          password,
        })
        .then((res) => {
          navigate("/sign-in");
        });
    } catch (error) {
      console.log(error);
      alert("Falha ao tentar realizar cadastro! Tente novamente em instantes.");
    }
  };
  return (
    <Container>
      <img src={Logo} alt="logo magic sports" />
      <Form onSubmit={SignIn}>
        <Input
          placeholder="Nome"
          value={name}
          type="name"
          onChange={(ev) => setName(ev.target.value)}
        ></Input>
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
          onChange={(ev) => setPassword(ev.target.value)}
        ></Input>
        <Input
          placeholder="Confirme sua senha"
          value={confirmPass}
          type="password"
          onChange={(ev) => setConfirmPass(ev.target.value)}
        ></Input>
        <Button type="submit">Cadastrar</Button>
      </Form>
      <StyledLink to="/sign-in">Já tem conta? Faça Login!</StyledLink>
    </Container>
  );
}
export default SignUpScreen;

const Container = styled.div`
  box-sizing: border-box;
  background-color: #33164f;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
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
  margin-bottom: 60px;
`;
