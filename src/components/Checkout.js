import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TokenContext from "../contexts/TokenContext";


function Checkout(ev) {
    const navigate = useNavigate();

    const { token } = useContext(TokenContext);

    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [apt, setApt] = useState("");
    const [cep, setCep] = useState("");

    const [ccOwner, setCcOwner] = useState("");
    const [cpf, setCpf] = useState("");
    const [telephone, setTelephone] = useState("");
    const [ccNumber, setCcNumber] = useState("");
    const [ccExpirationDate, setCcExpirationDate] = useState("");
    const [ccSecurityCode, setCcSecurityCode] = useState("");

    async function finishPurchse(ev) {
        ev.preventDefault();
        const purchaseInfo = {
            billingAdress: {
                street: street,
                number: number.trim(),
                apt: apt,
                CEP: cep.replace("-", "").trim()
            },
            payment: {
                CCOwner: ccOwner,
                CPF: cpf.replace(/\./g, "").replace("-", "").trim(),
                telephone: telephone.replace(/ /g, "").replace("-", "").trim(),
                CCNumber: ccNumber.replace(/ /g, "").trim(),
                CCExpirationDate: ccExpirationDate,
                CCSecurityCode: ccSecurityCode.trim()
            },
            purchase: [{item: "item"}]
        };

        try {
            const res = axios.post("http://localhost:5000/checkout", purchaseInfo);
            alert("Compra efetuada");
            navigate("/");
        } catch (error) {
        }
    }

    return (
        <Container>
            <BuyerInfo onSubmit={ev => finishPurchse(ev)}>
                <Adress>
                    <SectionName>Endereço de entrega</SectionName>
                    <Label htmlFor="street">Endereço</Label>
                    <Street placeholder="Ex: Rua, Avenida..." onChange={ev => setStreet(ev.target.value)} value={street} id="street" type="text"></Street>
                    <Label htmlFor="number">Número</Label>
                    <Number placeholder="299" onChange={ev => setNumber(ev.target.value)} value={number} id="number" type="text"></Number>
                    <Label htmlFor="apt">Apartamento</Label>
                    <Apt placeholder="apt 602, casa 2..." onChange={ev => setApt(ev.target.value)} value={apt} id="apt" type="text"></Apt>
                    <Label htmlFor="cep">CEP</Label>
                    <CEP placeholder="Apenas números" onChange={ev => setCep(ev.target.value)} value={cep} id="cep" type="text"></CEP>

                </Adress>
                <Line></Line>
                <Payment>
                    <SectionName>Cartão de crédito</SectionName>
                    <Label htmlFor="ccOwner">Titular do cartão</Label>
                    <CCOwner placeholder="Fulano de tal" onChange={ev => setCcOwner(ev.target.value)} value={ccOwner} id="ccOwner" type="text"></CCOwner>
                    <Label htmlFor="cpf">CPF do titular</Label>
                    <CPF placeholder="Apenas números" onChange={ev => setCpf(ev.target.value)} value={cpf} id="cpf" type="text"></CPF>
                    <Label htmlFor="telephone">Telefone com DDD</Label>
                    <Telephone placeholder="DDD XXXXX-XXXX" onChange={ev => setTelephone(ev.target.value)} value={telephone} id="telephone" type="text"></Telephone>
                    <Label htmlFor="ccNumber">Cartão de Crédito</Label>
                    <CCNumber placeholder="XXXX XXXX XXXX XXXX" onChange={ev => setCcNumber(ev.target.value)} value={ccNumber} id="ccNumber" type="text"></CCNumber>
                    <Label htmlFor="ccExpirationDate">Validade do cartão</Label>
                    <CCExpirationDate onChange={ev => setCcExpirationDate(ev.target.value)} value={ccExpirationDate} id="ccExpirationDate" type="month"></CCExpirationDate>
                    <Label htmlFor="ccSecurityCode">Código de segurança</Label>
                    <CCSecurityCode onChange={ev => setCcSecurityCode(ev.target.value)} value={ccSecurityCode} id="ccSecurityCode" type="text"></CCSecurityCode>
                </Payment>
                <Button type="submit">Finalizar Compra</Button>
            </BuyerInfo>
        </Container>
    )
}

export default Checkout;

const Container = styled.main`
    width: 375px;
    margin: 0 auto;
`;

const BuyerInfo = styled.form`
    width: 325px;
    margin: 0 auto;
`;

const SectionName = styled.h3`
    font-family: Play;
    font-size: 25px;
    margin-bottom: 10px;
`;

const Label = styled.label`
    margin: 5px 5px 5px 0;
    font-family: Play;
`;

const Adress = styled.section`
`;

const Street = styled.input`
    width: 325px;
    margin-bottom: 5px;
`;

const Number = styled.input`
    width: 40px;
    margin: 0 5px 5px 0;
`;

const Apt = styled.input`
    width: 115px;
`;

const CEP = styled.input`
`;

const Line = styled.div`
    margin: 20px auto;
    border: 1px solid gray;
`;

const Payment = styled.section`
`;

const CCOwner = styled.input`
    width: 325px;
    margin-bottom: 5px;
`;

const CPF = styled.input`
    width: 200px;
    margin-bottom: 5px;
`;

const Telephone = styled.input`
    width: 150px;
    margin-bottom: 5px;
`;

const CCNumber = styled.input`
    width: 325px;
    margin-bottom: 5px;
`;

const CCExpirationDate = styled.input`
    width: 170px;
    margin-bottom: 5px;
`;

const CCSecurityCode = styled.input`
    width: 50px;
`;

const Button = styled.button`
    margin: 20px auto;
    width: 325px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #542084;
    color: #fdb927;
    font-family: Koulen;
    font-size: 20px;
`;