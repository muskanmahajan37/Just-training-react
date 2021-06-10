import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 10px;
    cursor: pointer;
    background: rgb(139, 12, 139);
    border: 1px solid rgb(139, 12, 139);
    margin-top: 10px;
    border-radius: 4px;
    color: whitesmoke;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

    &:hover{
        background: rgb(104, 9, 104);
    }
`


export default Button;
