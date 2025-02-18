import styled from "styled-components";




export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background-color: #6a1b9a;
    color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserComponent = styled.div`
    width: 80%;
    height: 70px;
    border: 1px black solid;
    background: aliceblue
`

export const PostsComponent = styled.div`
    width: 80%;
    height: 70px;
    border: 1px black solid;
    background: #d97ea8;
    margin: 5px
`