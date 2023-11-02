import { Link } from "react-router-dom";
import styled from "styled-components";

export const Full_Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Msg_Container = styled.div`
  height: 300px;
  width: 300px;
  border: #d3d3d3 solid 2px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 200px;
  cursor: pointer;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  line-height: 50px;
  background-color: #fae100;
  color: #371d1e;
  border: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 50px;
  width: 200px;
  cursor: pointer;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  line-height: 50px;
  background-color: #fae100;
  color: #371d1e;
  border: none;
  border-radius: 5px;
`;

export const Text = styled.p`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 15px;
`;
