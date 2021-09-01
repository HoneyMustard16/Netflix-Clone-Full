import styled from "styled-components/macro";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  max-width: 640px;
  margin: 1rem auto;
  font-weight: 400;
`;
