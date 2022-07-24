import { Feather } from '@expo/vector-icons';
import React from 'react';

import { Container, Header, Input, InputArea } from './styles';

const Home = () => {
  return (
    <Container showsHorizontalScrollIndicator={false}>
      <Header>
        <InputArea style={{ elevation:3 }}>
          <Feather name='search' size={24} color='#000' />
          <Input placeholder='O que está procurando ?' />
        </InputArea>
      </Header>

      
    </Container>
  );
};

export default Home;
