import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUpScreen() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass,setConfirmPass] = useState("");
    const SignIn = async function (ev) {
        ev.preventDefault();
        if(confirmPass!== password) {
            setPassword("");
            setConfirmPass("");
            alert("As senhas não conincidem!")
            return
        }
        try {
            await axios.post("https://magic-sports.herokuapp.com/sign-up", 
        {   name,
            email,
            password
        })
        .then(res => {
            navigate("/sign-in");
        })
        } catch (error) {
            console.log(error);
            alert("Falha ao tentar realizar cadastro! Tente novamente em instantes.");
        }
        
    }
  return (
    <Container>
      <H1>We MAGIC!</H1>
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
      <StyledLink to="/sign-up">Já tem conta? Faça Login!</StyledLink>
    </Container>
  );
}
export default SignUpScreen;

const Container = styled.div`
  background-color: #542084;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 375px;
  height: 100vh;
`;

const H1 = styled.h1`
  margin: 159px 0 24px 0;
  height: 50px;
  font-size: 32px;
  line-height: 50px;
  color: #fdba22;
  font-family: "Saira Stencil One", cursive;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 326px;
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  margin-bottom: 13px;
  border: none;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 23px;
`;

const Button = styled.button`
  width: 326px;
  height: 46px;
  border-radius: 5px;
  background-color: #fdba22;
  border: none;
  margin-bottom: 36px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #542084;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  color: #fdba22;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-decoration: none;
`;
