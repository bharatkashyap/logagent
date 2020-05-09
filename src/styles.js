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
