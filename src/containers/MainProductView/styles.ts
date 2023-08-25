import { styled } from "styled-components";
import { colors } from "../../styles";
// import { Link } from 'react-router-dom'


export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-top: 400px solid transparent;
    border-bottom: 1000px solid transparent;
    border-left: 800px solid ${colors.green};
    border-top: 0.1px solid;    
    display: flex;
    z-index: 0;
`

export const KitPic = styled.img`
    display: flex;
    height: 500px;
    width: 600px;
    z-index: 1;
    left: 20px;
    top: 60px;
    position: absolute;
    border-top: 1px solid ${colors.golden};
    border-left: 1px solid ${colors.golden};
    border-radius: 32px;
`

export const GreekLetters = styled.p`
    display: flex;
    height: 500px;
    width: 600px;
    z-index: 1;
    left: 40px;
    top: 70px;
    position: absolute;
    color: ${colors.golden};
    font-size: 32px;
    font-weight: bolder;
`

export const MainInfo = styled.div`
    padding-top: 60px;
    color: ${colors.green};

    h1 {
        margin-left: 60px;
        margin-bottom: 42px;
    }
    p {
        width: 480px;
        text-align: justify;
        line-height: 22px;
        margin-bottom: 12px;
    }
`

export const ToBuy = styled.a`
    text-decoration: none;
    display: flex;
    width: 100px;
    cursor: pointer;
    padding: 8px;
    margin-top: 24px;
    border: 2px solid;
    border-radius: 32px;
    border-color: ${colors.green};
    background-color: ${colors.green};
    color: ${colors.white};
    transition: all ease 1s;

    &:hover {
        transform: scale(1.02);
        opacity: .8;
    }
`