import styled from 'styled-components';

export const Heading = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.1rem;
    @media (max-width: 420px) {
        font-size: 0.7rem;
    }
    color: #BEBEBE;
    margin: 1rem 0;
    @media(max-width: 420px) {
        margin: 0.5rem;
    }
`

export const Button = styled.button`
    outline: none;
    border: none;
    background-color: #282C34;
    color: #FFF;
    padding: 1rem 0.6rem;
    @media (max-width: 420px) {
        padding: 0.5rem 0.3rem;
    }
    margin: 0.25rem;
    height: 45px;
    width: 135px;
    @media (min-width: 768px) {
        height: 60px;
        width: 180px;
    }
    font-size: 0.8rem;
    @media (min-width: 768px) {
        font-size: 1rem;
    }
    color: #CCC;
    text-align: center;
    transition: all 0.1s ease-in;
    &:focus {
        ouline: none;
    }
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 1px 1px #000;
    }
`

export const Grid = styled.table`
    border-collapse: separate;
    border-spacing: 0.5rem;
    width: 30%;
    margin: auto;
`

export const TimeItem = styled.tr`
    
    margin-bottom: 0.2rem;
`

export const TimeLabel = styled.td`
    text-transform: uppercase;
    font-weight: 600;
    @media (max-width: 420px) {
        font-size: 0.6rem;
    }
    font-size: 0.9rem;
    color: #CECECE;
  
`

export const Time = styled.td`
    background-color: #FFD18C;
    border: 2px solid #F2B355;
    font-family: monospace;
    border-radius: 5px;
    font-weight: 600;
    padding: 5px;
    color: #F29A16;
    @media (max-width: 420px) {
        font-size: 0.8rem;
    }
    font-size: 1.2rem;
`
