import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #fff;
`;

export const Header = styled.View`
  padding: 0px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;
`;

export const InputArea = styled.View`
  padding: 0px 15px;
  flex-direction: row;
  align-items: center;
  width: 98%;
  background: #fff;
  border-radius: 10px;
  height: 37px;
`;

export const Input = styled.TextInput`
  font-family: Montserrat_500Medium;
  padding: 0px 10px;
  font-size: 13px;
  width: 90%;
`;
