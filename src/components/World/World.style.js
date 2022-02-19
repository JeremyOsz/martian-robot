import styled from "styled-components";

const WorldContainer = styled.div`
    display: flex;
    background: #a0a0a0;
    min-height: 20px;
    min-width: 40px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    flex: 1;

`

const Cell = styled.div`
    display:block;
    position: relative;
    border: 1px solid #000;
    background: #de5151;
    height: 40px;
    width: 40px;
`

export {WorldContainer, Cell}