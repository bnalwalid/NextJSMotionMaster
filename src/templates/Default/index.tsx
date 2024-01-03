import useAnimatedRouter from 'hooks/useAnimatedRouter';

import { Wrapper } from 'components/atom/Grid';

import { Container } from './styles';

interface ITemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<ITemplateProps> = ({ children }) => {
  const { viewTransitionsStatus } = useAnimatedRouter();

  return (
    <>
      <Container className="template-default">
        <Wrapper>{children}</Wrapper>

        <footer>
          <p>
            <strong>Status:</strong> {viewTransitionsStatus()}
          </p>
        </footer>
      </Container>
    </>
  );
};
export default Template;
