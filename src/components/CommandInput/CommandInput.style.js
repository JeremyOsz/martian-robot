import styled from "styled-components";

const Container = styled.form`
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-color: #fff;
    color: #000;
    text-align: center
`

const TextArea = styled.textarea`
    display: block;
    resize: none;
    width: 100%;
    min-height: 10rem;
`
const Button = styled.button`
    display: block;
    padding: 5px 10px;
    border: solid 1px #000;
    background: #fff;
    border-radius: 2px;
    margin: 5px auto;

`

const ErrorMessage = styled.p`
    color: red;
`
export {Container, TextArea, Button, ErrorMessage}