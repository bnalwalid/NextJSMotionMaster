/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import AnimatedLink from 'hooks/useAnimatedRouter/AnimatedLink';

import routes from 'config/routes';

import Header from 'components/atom/Header';

import { Container } from './styles';

const Details: React.FC = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <Container $id={id.toString()}>
      <Header>
        <AnimatedLink href={routes.home}>Go Back</AnimatedLink>
      </Header>

      <section>
        <img src={`https://picsum.photos/seed/${id}/400/300`} alt={id.toString()} style={{ viewTransitionName: `image-thumb-${id}` }} />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam fuga error laborum quam veniam necessitatibus voluptatum quidem, nesciunt
          quia tenetur odit corporis suscipit, porro unde neque distinctio accusamus libero accusantium. Assumenda, distinctio magnam aperiam quod, nostrum
          laudantium amet unde, omnis cum odio ullam laboriosam ducimus neque veniam? Quis dolorem odio commodi rem non ullam blanditiis voluptate. Commodi
          aliquid repellendus eligendi non, nostrum, ab, explicabo minima veritatis nam deserunt soluta harum! Nihil, quae culpa? Quae sit nobis quod, qui nisi
          reprehenderit architecto illum non facere necessitatibus? Fuga asperiores assumenda inventore quia sint! Minima distinctio quae accusamus quasi
          obcaecati nemo dolorum sapiente voluptas maiores veritatis facere quibusdam adipisci nostrum, aut dolorem, esse tenetur minus officiis animi dolores
          voluptatibus. Tempora est, illum, aliquid ad cupiditate beatae non, enim deserunt quo nostrum sunt? Vel, adipisci. Tempore assumenda aliquid quasi
          perspiciatis modi dolorem laborum odit. Consequatur possimus quibusdam molestiae sed beatae esse hic quas rerum nesciunt placeat tempora impedit modi
          quod voluptate eaque voluptas quos eos, corporis qui neque officia rem maxime! Harum ipsam dolorem distinctio aperiam, libero earum, est quasi
          possimus iste eaque pariatur, enim officia minus! Ipsam laudantium blanditiis nesciunt nemo quos, sapiente nulla voluptas eveniet minus quae eaque et
          beatae perspiciatis.
        </p>
      </section>
    </Container>
  );
};
export default Details;
