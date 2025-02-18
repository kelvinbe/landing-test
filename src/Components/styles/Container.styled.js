import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: auto;
    max-width: 100%;
    margin: 0 auto;
    color: red;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    @media (max-width: 768px) { 
        width: 90%;
        height: auto;
        flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    }
`

export const ContainerRegister = styled.div`
    width: 100%;
    height: auto;
    max-width: 100%;
    margin: 0 auto;
    color: red;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    @media (max-width: 768px) { 
        width: 90%;
        height: auto;
        flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    }
`

export const ImageSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6A1B9A;
    color: white;
    padding: 20px;

      @media (max-width: 768px) { 
        width: 90%;
        height: auto;
        flex-direction: column;


    }
`

export const FormSection = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;


    @media (max-width: 768px) { 
        width: 90%;
        height: auto;
        flex-direction: column;

    }

`

export const InputSection = styled.div`
    width: 100%;
    padding: 10px 15px;
    margin: 10px 0;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;



`

export const StyledButton = styled.button`
    width: 100%;
    background: ${props => props.$btnColor};
    color: ${props => props.$txtColor};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 9px;
    font-weight: 400;
    border-color: ${props => props.$btnColor};


`;

export const IconStyledButton = styled.button`
    width: ${props => props.btnWidth};
    background: ${props => props.$btnColor};
    color: ${props => props.$txtColor};
    font-size: 12px;
    margin: 1em;
    border-radius: 9px;
    display: flex;
    border-color: ${props => props.$btnColor};

`;
