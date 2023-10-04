import { Container, Links } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/section';


export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links Uteis">
        <Links>
          <li>
            <a href="#">http://rocketseat.com.br</a>
          </li>

          <li>
            <a href="#">http://rocketseat.com.br</a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  )
}