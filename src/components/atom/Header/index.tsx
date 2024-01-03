import { Container } from './styles';

interface IHeader {
  children: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => (
  <Container>
    <div>{children}</div>
  </Container>
);
export default Header;
