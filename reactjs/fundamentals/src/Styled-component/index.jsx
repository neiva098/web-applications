import React from 'react';
import { Container, Head, Titulo, BemVindo } from './style';

export default () => {
  return (
    <Container>
        <Head>
          <Titulo>Projeto Styled</Titulo>
        </Head>

        <BemVindo cor="0000FF" tamanho={35}>
          Bem vindo ao sistema
        </BemVindo>

    </Container>
  );
}
