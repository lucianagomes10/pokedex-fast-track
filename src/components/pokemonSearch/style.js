import styled from "@emotion/styled";
import theme from "../globalStyle/theme";

export const Name = styled.h1`
  color: ${theme.colors.pokewhite}
  font-size: 48px;
`;

export const Pokemon = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #93c5d8;
  box-shadow: 5px 5px 5px 5px ${theme.colors.pokeshadow};
  border: 10px ${theme.colors.pokegray};
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
`;
export const Image = styled.div`
  text-align: center;
`;
export const CardDescription = styled.div``;
export const ButtonSearch = styled.button`
  font-size: 16px;
  text-align: center;
  width: 100px;
  height: 36px;
  border: 5px ${theme.colors.pokeshadow};
  background: ${theme.colors.pokeblue};
  border-radius: 8px;
  margin-bottom: 18px;
`;
export const UserTitle = styled.h1`
  text-align: center;
  color: ${theme.colors.pokeblue};
`;
export const UserTrue = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.pokewhite};
  box-shadow: 5px 5px 5px 5px ${theme.colors.pokeshadow};
  border: 10px ${theme.colors.pokegray};
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
`;
