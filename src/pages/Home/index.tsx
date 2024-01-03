/* eslint-disable @next/next/no-img-element */
import AnimatedLink from 'hooks/useAnimatedRouter/AnimatedLink';
import routes from 'config/routes';

import Header from 'components/atom/Header';

import { Container } from './styles';

const Home: React.FC = () => (
  <>
    <Header>
      <h2>NextJS Motion Master</h2>

      <a href="https://github.com/bnalwalid/NextJSMotionMaster" target="_blank" rel="noreferrer" className="github-link">
        Github
      </a>
    </Header>

    <Container>
      {
        //array of 10 elements
        Array.from(Array(6).keys()).map((_, index = 0) => (
          <AnimatedLink key={index + 1} href={routes.details((index + 1).toString())}>
            <img
              src={`https://picsum.photos/seed/${index + 1}/400/300`}
              alt={(index + 1).toString()}
              style={{ viewTransitionName: `image-thumb-${index + 1}` }}
            />
          </AnimatedLink>
        ))
      }
    </Container>
  </>
);
export default Home;
