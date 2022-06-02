import styled from "styled-components";


export const Container = styled.section`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    padding: 160px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

export const ContainerBtn = styled.div`
    color: #D9D9D9;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 32px;
`

export const ContainerCounter = styled.div`
    height: 240px;
    width: 240px;
    background-color: #383838;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #B6FFCE;
    font-size: 48px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`

export const BtnStyleAdd = styled.button`
    cursor pointer;
    background-color: #6930C3;
    color: #B6FFCE;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 16px 40px;
    border-radius: 45px;
    border-style: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    
`

export const BtnStyleSub = styled.button`
    cursor pointer;
    background-color: #14C38E;
    color: #B6FFCE;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 16px 40px;
    border-radius: 45px;
    border-style: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`


