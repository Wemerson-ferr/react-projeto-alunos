import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
        login
        <small> Lorem, ipsum dolor.</small>
      </Title>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <button type="button">clicar</button>
    </Container>
  );
}
