import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomepageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #d07e0e;
`;

export const WindowContainer = styled.div`
  border: 1px solid #2f2b32;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80vw;
  height: 70vh;
  flex-direction: column;
  background-color: #f2f2f2;
  box-shadow: 0 8px 6px -6px black;
`;

export const WindowBar = styled.div`
  width: 100%;
  border-bottom: 1px solid #2f2b32;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FakeButton = styled.div`
  width: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.h1`
  font-family: "Cutive Mono", monospace;
  font-size: 50px;
  margin-left: 5%;

  @media screen and (max-width: 420px) {
    font-size: 40px;
  }
`;

export const TitleContainer = styled.div`
  width: 80vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-top: 1px solid #2f2b32;
  margin: 20vh 10vw 0vh 10vw;
`;

export const StartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  margin-top: 15vh;

  @media screen and (max-width: 425px) {
    margin: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReadyH2 = styled.h2`
  font-size: 30px;
  margin-left: 30%;

  @media screen and (max-width: 420px) {
    margin: auto;
  }
`;

export const GoButton = styled.button`
  border: 1px solid #2f2b32;
  cursor: pointer;
  outline: none;
  margin-left: 40%;
  padding: 10px;

  &:hover {
    background: #2f2b32;
  }

  @media screen and (max-width: 420px) {
    margin: 30px auto;
  }
`;

export const CardLink = styled(Link)`
  color: #2f2b32;
  text-decoration: none;
  font-size: 50px;
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  width: 100%;
  height: 100%;
  &:hover {
    color: #f2f2f2;
  }

  @media screen and (max-width: 420px) {
    font-size: 40px;
  }
`;
