import styled from "styled-components";

const Container = styled.div`
    display: flex;
    position: relative;
    width: 400px;
    height: 600px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-color: #fff;
    color: #000;
    align-content: center;
    flex-direction: column;
    padding: 20px
`

const OutputField = styled.div`
    font-size: 12px;
    padding: 5px;
    p{
        font-size: 10px;
        margin: 1px;
    }
`
export {Container, OutputField}