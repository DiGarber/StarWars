import styled from "styled-components";

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
height: 100%;
padding: 50px;
`;

export const Button = styled.button`
display: flex;
align-self: center;
align-items: center;
flex-direction: column;
text-align: center;
width: 100px;
height: 30px;
border-width: 2px;
border-color: #d6aa16;
border-radius: 5px;
background-color: black;
font-weight: bold;
font-size: 1em;
color: #d6aa16;
text-decoration: none;
padding: 3px;
`;

export const StarWarsLogo = styled.img`
width: 400px;
height: 200px;
`;

export const CardBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align:items: center;  
text-align: center;
width: 40%;
color: #eee;
box-shadow: -3px 4px 25px 2px rgba(255, 255, 255, 0.75);
-webkit-box-shadow: -3px 4px 25px 2px rgba(255, 255, 255, 0.75);
-moz-box-shadow: -3px 4px 25px 2px rgba(255, 255, 255, 0.75);
margin-top: 50px;
border-width: 3px;
border-radius: 5px;
border-color: #d6aa16;
padding: 10px;
`;

export const CharacterName = styled.p`
text-align: center;
font-size: 2em;
font-weight: bold;
color: #eee;
`;

export const CharacterStats = styled.p`
text-align: center;
font-size: 1.8em;
font-weight: 700px;
color: #eee;
`;
