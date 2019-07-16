import React from 'react';
import styled from 'styled-components';
import Button from './assets/styles/components/Buttons'

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'header header header'
    'aside main main'
    'footer footer footer';
`

const Header = styled.header`
  grid-area: header;
  background: #f5f5;
`
const Aside = styled.aside`
  grid-area: aside;
  background: #f5f5;
`
const Main = styled.main`
  grid-area: main;
  background: #f5f5;
`
const Footer = styled.footer`
  grid-area: footer;
  background: #f5f5;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <h2>header</h2>
        </Header>
        <Aside>
          <h2>aside</h2>
        </Aside>
        <Main>
          <h2>main</h2>
        </Main>
        <Footer>
          <h2>footer</h2>
        </Footer>
      </Container>
      <Button>
        New Teste
      </Button>
    </div>
  );
}

export default App;
